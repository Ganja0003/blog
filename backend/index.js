import express from 'express'
import db from './database.js'
import authRoute from './auth/route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import auth from './middleware/authMiddleware.js'

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


app.get('/profile', auth, (req,res) => {
 res.json(req.user)
})

app.post('/createPost', async(req,res) => {
    try {
        const post = await db('posts').insert(req.body);
        res.status(201).json({
            postID: post[0],
            message:'post created successfully'
        })
    } catch (error) {
        
    }
    
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});