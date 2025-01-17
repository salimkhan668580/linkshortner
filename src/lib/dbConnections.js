import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose && mongoose.connection && mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DBURL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('DB connection error:', error);
  }
};

export default dbConnect;
