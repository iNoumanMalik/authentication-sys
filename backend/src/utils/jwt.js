import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

export const signAuthToken = (user)=>{
    return jwt.sign({uid: user._id, email: user.email, role: user.role},JWT_SECRET, {expiresIn: JWT_EXPIRY})
}

export const verifyAuthToken = (token)=>{
    return jwt.verify(token,JWT_SECRET)
}