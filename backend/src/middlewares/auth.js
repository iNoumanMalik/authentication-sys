import { verifyAuthToken } from "../utils/jwt.js";

export const requireAuth = (req, res, next) => {
  const token = req.cookies.token || req.headers.Authorization?.split("")[1]; 
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const payload = verifyAuthToken(token);
    req.user = payload; 
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid Token" });
  }
};

export const requireAdmin = (req,res,next) => {
    if(req.user?.role !== 'admin') return res.status(403).json({error: 'Forbidden'})
    next();
}
