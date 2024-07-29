import { Request, Response } from 'express';
import Task, { ITask } from '../models/Task';

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status } = req.body;
    const newTask = new Task({ title, description, status });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

export const updateTask = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(updatedTask);
    } catch (error) {
      res.status(400).json({ message: 'Invalid data or Task not found' });
    }
  };

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: 'Task not found' });
  }
};
