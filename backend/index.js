import express from 'express'
import db from './database.js'
import authRoute from './auth/route.js'
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())
app.use('/auth',authRoute)

app.get('/',(req,res) => {
    res.send('welcome to the backend');
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});