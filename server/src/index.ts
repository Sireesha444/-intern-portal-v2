import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // allow Vite dev server
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (_req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
