import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("[INFO] ✅ Connected to MongoDB");
  } catch (error) {
    console.error("[ERROR] ❌ Failed to connect to MongoDB:", error.message);
  }
};

export default connectMongoDB;
