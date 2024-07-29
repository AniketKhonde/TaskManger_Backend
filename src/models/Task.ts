import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description: string;
  status: 'To-Do' | 'In Progress' | 'Done';
}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true, enum: ['To-Do', 'In Progress', 'Done'], default: 'To-Do' },
});

export default mongoose.model<ITask>('Task', TaskSchema);
