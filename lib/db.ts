import { useToast } from "@/ui/toast/toast-utils";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const { callToast } = useToast();

const connect = async () => {
  const connectionState = await mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }
  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "easypay",
      bufferCommands: true,
    });
    console.log("Connected");
  } catch (error: any) {
    console.log("Error: ", error);
    callToast({
      message: "An Unexpected error occured",
      title: "Error",
      type: "error",
    });
    throw new Error("Error: ", error);
  }
};
export default connect;
