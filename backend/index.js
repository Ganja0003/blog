import express from 'express'
import db from './database.js'
import authRoute from './auth/route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import validateToken from './middleware/authMiddleware.js'

const app = express();
app.use(express.json())
app.use(cors({
    origin: 'http://127.0.0.1:3000',
    credentials: true
}))
app.use(cookieParser())
app.use('/auth',authRoute)

app.get('/',(req,res) => {
    res.send('welcome to the backend');
});


app.get('/profile', validateToken, (req,res) => {
 res.json(req.user)
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

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});