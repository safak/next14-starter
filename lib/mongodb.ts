import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("connect to MongoDB");
  } catch (error) {
    console.log(`DB error is 💥 ${error}`);
  }
};

export default connectMongoDB;
