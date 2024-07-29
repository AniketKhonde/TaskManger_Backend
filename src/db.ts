import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from the environment variable or default URI
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/taskDB');
    console.log('MongoDB connected');
  } catch (err) {
    // Check if the error has a message property and log it
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred while connecting to MongoDB');
    }
    // Exit the process with failure code
    process.exit(1);
  }
};

export default connectDB;
