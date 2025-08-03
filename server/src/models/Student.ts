import mongoose, { Document, Schema } from "mongoose";

// Interface to describe the shape of a student document
export interface IStudent extends Document {
  name: string;
  email: string;
  password: string;
}

// Define schema
const studentSchema = new Schema<IStudent>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create and export model
const Student = mongoose.model<IStudent>("Student", studentSchema);
export default Student;
