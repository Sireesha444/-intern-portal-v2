// server/src/controllers/companyAuthController.ts
import Company from "../models/Company";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import twilio from "twilio";

const accountSid = "your_twilio_sid";
const authToken = "your_twilio_auth_token";
const twilioClient = twilio(accountSid, authToken);
const twilioNumber = "your_twilio_number";

// Step 1: Login - send OTP
export const companyLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const company = await Company.findOne({ email });

  if (!company || company.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  company.otp = otp;
  company.otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes
  await company.save();

  await twilioClient.messages.create({
    to: company.phone,
    from: twilioNumber,
    body: `Your OTP for login is ${otp}`,
  });

  res.status(200).json({ message: "OTP sent to your phone" });
};

// Step 2: Verify OTP
export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otp } = req.body;
  const company = await Company.findOne({ email });

  if (!company || company.otp !== otp || company.otpExpiry! < new Date()) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  company.otp = undefined;
  company.otpExpiry = undefined;
  await company.save();

  const token = jwt.sign({ id: company._id }, "your_jwt_secret", { expiresIn: "1d" });
  res.status(200).json({ token });
};
