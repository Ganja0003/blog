import jwt from 'jsonwebtoken'


function validateToken(req,res,next){
 const token = req.cookies['token'];

 if(!token){
    res.status(400).json('user not authenticated')
 }
try{
 const validToken = jwt.verify(token, process.env.JWT_SECRET);
 if(validToken){
    req.user = validToken;
    next();
 }
}catch(err){
    res.status(400).json({error: err})
}
}


export default validateToken