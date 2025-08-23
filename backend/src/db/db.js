import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (uri) throw new Error("Mongo URI is missing");
  await mongoose.connect(uri);
  console.log("Mongo DB Connected");
};
