import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref:'User', required:true, index:true},
    tokenHash: {type:String, required:true, index:true},
    type:{type:String, enum:['verify,reset'], required:true},
    expiresAt: {type:Boolean, default:false, index:true},
    used: {type:Boolean, default:false}

})

export const Token = mongoose.model('Token',tokenSchema)