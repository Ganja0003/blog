import jwt from 'jsonwebtoken';

function createToken(user){
 const token = jwt.sign({email: user.email, name: user.name, id: user.id}, process.env.JWT_SECRET )
 return token
}

export default createToken;