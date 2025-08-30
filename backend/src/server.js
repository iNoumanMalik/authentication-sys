import 'dotenv/config'
import express from "express";
import cors from 'cors'
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import authRoutes from "./routes/auth.routes.js";
import path from 'path'
import { fileURLToPath } from 'url';
import { connectDB } from './db/db.js';

const PORT = process.env.PORT || 8000;
const app = express();

await connectDB();
app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  }));
app.use(cookieParser()) // helps your server (not the browser) by making cookies easily accessible.
app.use(morgan('dev')) // logs every request hitting your server, helps in debugging
app.use(helmet()) // every incoming request passes through it. Sets HTTP headers to protect against common attacks

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads',express.static(path.join(__dirname,'uploads'))); // if the route matches /uploads folder find it in this static address

app.use('/api/auth',authRoutes);

app.use((err,_req,res,_next)=>{
    console.log(err)
    const status = err.status || 500;
    res.status(status).json({error: err.message || 'Server error'})
})

app.listen(PORT,()=>{
    console.log('App is listening to the port: '+PORT)
})
