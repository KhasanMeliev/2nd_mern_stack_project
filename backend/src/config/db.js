import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://khasanmeliev2_db_user:EOuKXO6Venkw4UuQ@cluster0.bvfeljz.mongodb.net/?appName=Cluster0",
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
