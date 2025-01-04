import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL environment variable is not set");
  }

  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to MongoDB!");
  } catch (err) {
    if (err instanceof Error) {
      console.error("Failed to connect to MongoDB:", err.message);
    } else {
      console.error("Failed to connect to MongoDB:", err);
    }
    throw err;
  }
};

mongoose.connection.on("connected", () => console.log("Mongoose connected to DB"));
mongoose.connection.on("error", (err) => console.error("Mongoose connection error:", err));
mongoose.connection.on("disconnected", () => console.log("Mongoose disconnected"));

export default connectDB;
