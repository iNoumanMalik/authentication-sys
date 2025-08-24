import 'dotenv/config'
import { User } from "../models/users.model";
import connectDB from '../db/db'

await connectDB();
const adminEmail = 'admin@authflow.test'
let admin = User.findOne({email: adminEmail})

if(!admin){
    admin = new User({
        name: 'admin',
        email: adminEmail,
        role: 'admin',
        isVerified: true
    })
    admin.setPassword('Test123')
    await admin.save();
    console.log('Admin created:', adminEmail, 'password: Test123!');
}else{
    console.log('Already exists')
}

process.exit(0);
