import { User } from "../models/users.model.js";

export const listUsers = async (_req,res)=>{
    const users = await User.find().select('-passwordHash')
    return res.json({users})
}

export const updateUser = async(req,res)=>{
    const {id} = req.params;
    const update = req.body;
    delete update.passwordHash;
    const user = await User.findByIdAndUpdate(id,update,{new:true}).select('-passwordHash')
    return res.json({user})
}

export const deleteUser = async(req,res)=>{
    const {id} = req.params;
    await User.findByIdAndDelete(id);
    res.json({message:'User deleted!'})
}