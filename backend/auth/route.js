import db from '../database.js'
import express from 'express'
import bcrypt from 'bcrypt'

const route = express.Router();

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

export default route;