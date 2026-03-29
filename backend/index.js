import express from 'express'
import db from './database.js'
import authRoute from './auth/route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import validateToken from './middleware/authMiddleware.js'

const app = express();
app.use(express.json())
app.use(cors({
    origin: 'https://blog-rho-three-24.vercel.app',
    credentials: true
}))
app.use(cookieParser())
app.use('/auth',authRoute)

app.get('/',(req,res) => {
    res.send('welcome to the backend');
});

app.get('/profile', validateToken, async (req, res) => {
  const id = req.user.id;

  try {
  const user = await db('users').where({ id }).select('name','id').first();
  const posts = await db('posts').where({ user_id: id });

  res.json({ user, posts });

} catch (err) {
  console.error(err);
  res.status(500).json({ error: err.message });
}
});

app.get('/posts',async (req,res) => {
    try{
        const posts = await db.select('*').from('posts');
        res.json(posts)
    }catch(error){
        res.status(500).json('server error')
    }
    
})

app.post('/createPost',validateToken, async(req,res) => {
    try {
        const {title,content} = req.body;
        const user_id = req.user.id
        const post = await db('posts').insert({user_id,title,content});
        res.status(201).json({
            postID: post[0],
            message:'post created successfully'
        })
    } catch (error) {
        console.error(error);
    res.status(500).json('message: server error.');
    }
    
})

app.delete('/posts/:id',validateToken, async(req,res)=>{
    const userId = req.user.id;
    const postId = req.params.id

    try {
        const post = await db('posts').where({id:postId}).first()

        if(!post){
            res.status(404).json('post not found')
        }

        if(post.user_id !== userId){
            res.status(403).json('user not authorized');
        }

        await db('posts').where({id:postId}).del();

        res.status(200).json('Post is deleted')
        
    } catch (error) {
        console.log(error)
        res.status(500).json('server error');
    }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});