import express from "express";
import { companyLogin, verifyOtp } from "../controllers/companyController";

const router = express.Router();

router.post("/login", companyLogin);
router.post("/verify-otp", verifyOtp);

export default router;
