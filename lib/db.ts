// import { useToast } from "@/ui/toast/toast-utils";
import mongoose from "mongoose";
import { toast } from "sonner";

const MONGODB_URI = process.env.MONGODB_URI;

// const { callToast } = useToast();

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("Error: ", error);
    // callToast({
    //   message: "An Unexpected error occured",
    //   title: "Error",
    //   type: "error",
    // });
    toast.error("Database Error");
    throw new Error("Error: ", error);
  }
};
export default connect;
