import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from "./routes/student.routes";
import companyRoutes from "./routes/companyRoutes"; // ✅ Add this

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/company", companyRoutes); // ✅ Register company routes

export default app;
