// server/src/models/Company.ts
import mongoose, { Document } from "mongoose";

export interface ICompany extends Document {
  email: string;
  password: string;
  phone: string;
  otp?: string;
  otpExpiry?: Date;
}

const companySchema = new mongoose.Schema<ICompany>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  otp: { type: String },
  otpExpiry: { type: Date },
});

export default mongoose.model<ICompany>("Company", companySchema);
