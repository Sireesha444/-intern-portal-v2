// src/models/student.model.ts
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  studentId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model("Student", studentSchema);
