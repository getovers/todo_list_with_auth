import mongoose, { Schema } from 'mongoose'

const taskSchema = new Schema({
  description: String,
  is_completed: Boolean,
  creator_username: String,
})

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema)

export default Task