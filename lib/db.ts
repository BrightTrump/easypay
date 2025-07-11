import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = await mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }
};
