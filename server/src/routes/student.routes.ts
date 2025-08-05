import express from "express";
import bcrypt from "bcryptjs";
import Student from "../models/student.model";

const router = express.Router();

// 📌 Generate unique student ID
const generateStudentId = () => {
  return "STU" + Math.floor(100000 + Math.random() * 900000).toString();
};

// ✅ Register Student
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }

    const studentId = generateStudentId();
    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      name,
      email,
      studentId,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Registered successfully", studentId });
  } catch (err) {
    console.error("❌ Registration Error:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

// ✅ Login Student
router.post("/login", async (req, res) => {
  try {
    const { studentId, password } = req.body;

    const student = await Student.findOne({ studentId });
    if (!student || !student.password) {
      return res.status(401).json({ message: "Invalid student ID or password" });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid student ID or password" });
    }

    res.status(200).json({ message: "Login successful", studentId: student.studentId });
  } catch (err) {
    console.error("❌ Login Error:", err);
    res.status(500).json({ message: "Login error", error: err });
  }
});

// ✅ Get Student Profile
router.get("/:studentId", async (req, res) => {
  try {
    const student = await Student.findOne({ studentId: req.params.studentId }).select("-password");
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (err) {
    console.error("❌ Get Profile Error:", err);
    res.status(500).json({ message: "Error fetching student", error: err });
  }
});

// ✅ Delete Student
router.delete("/:studentId", async (req, res) => {
  try {
    await Student.deleteOne({ studentId: req.params.studentId });
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    console.error("❌ Delete Error:", err);
    res.status(500).json({ message: "Error deleting student", error: err });
  }
});

// ✅ Google Login/Register Student
router.post("/google-login", async (req, res) => {
  try {
    const { name, email } = req.body;

    // Check if student already exists
    let student = await Student.findOne({ email });

    if (!student) {
      const studentId = generateStudentId();

      student = await Student.create({
        name,
        email,
        studentId,
        password: null, // No password for Google login
      });
    }

    res.status(200).json({ studentId: student.studentId });
  } catch (err) {
    console.error("❌ Google Login Error:", err);
    res.status(500).json({ message: "Google login error", error: err });
  }
});

export default router;
