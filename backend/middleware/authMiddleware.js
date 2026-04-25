import jwt from 'jsonwebtoken'


function validateToken(req,res,next){
 const token = req.cookies.token;
 
 if (!token) {
    return res.status(401).json('User not authenticated');
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