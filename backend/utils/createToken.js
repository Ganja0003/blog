import jwt from 'jsonwebtoken';

function createToken(user){
 const token = jwt.sign({email: user.email, id: user.id}, process.env.JWT_SECRET )
 return token
}

export default createToken;