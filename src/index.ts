import express from 'express';
import cors from 'cors';
import connectDB from './db';
import dotenv from 'dotenv';
import taskRoutes from './routes/TaskRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Allow all origins

// Routes
app.use('/tasks', taskRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
