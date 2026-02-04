import db from '../database.js'
import express from 'express'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import createToken from '../utils/createToken.js'

const route = express.Router();
route.use(cookieParser())

route.post('/signup', async (req,res) => {
    try{
        const {name,email,password} = req.body;
        const hash = await bcrypt.hash(password,10)
        await db('users').insert({
            name,
            email,
            password:hash
        })
        res.status(201).json({message:'User created'})
    }
    catch(err){
        res.status(500).json({error:'server error'})
    }
})


route.post('/login', async (req,res) => {
    try{
    const email = req.body.email;
    const password = req.body.password;

    const user = await db('users').where({email: email}).first()
    if(!user){
        return res.status(401).json('Unauthorized');
    }

    const checkPassword = await bcrypt.compare(password,user.password)

    if(!checkPassword){
       return res.status(401).json('Unauthorized');
    }else{
        res.cookie('token',createToken(user), {
        maxAge: 60*60*24*30*1000 }
    )
        res.status(200).json('Logged In');
    }

    } catch(err){
        res.status(500).json('server error')
    }
})

export default route;