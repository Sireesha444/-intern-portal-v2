// src/pages/StudentLogin.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface GoogleUser {
  email?: string;
  name?: string;
  picture?: string;
  [key: string]: any;
}

const StudentLogin: React.FC = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  // Google login handler
  const handleGoogleLogin = async (credentialResponse: any) => {
    try {
      if (credentialResponse.credential) {
        const decoded = jwtDecode<GoogleUser>(credentialResponse.credential);
        console.log("Google Login Success:", decoded);

        // Send user data to backend to create/find student
        const res = await axios.post("http://localhost:5000/api/students/google-login", {
          name: decoded.name,
          email: decoded.email,
        });

        const studentId = res.data.studentId;

        localStorage.setItem("student_token", credentialResponse.credential);
        localStorage.setItem(
          "student",
          JSON.stringify({
            email: decoded.email,
            name: decoded.name,
            picture: decoded.picture,
            loginType: "google",
            studentId,
          })
        );

        // ✅ Navigate with studentId
        navigate("/student-dashboard", { state: { studentId } });
      }
    } catch (error) {
      console.error("Google login failed", error);
      alert("Google login failed. Please try again.");
    }
  };

  // Manual login
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/students/login", {
        studentId,
        password,
      });

      const { studentId: returnedId } = res.data;

      localStorage.setItem("student_token", "custom_token_placeholder");
      localStorage.setItem(
        "student",
        JSON.stringify({
          studentId: returnedId,
          loginType: "credentials",
        })
      );

      // ✅ Navigate with studentId
      navigate("/student-dashboard", { state: { studentId: returnedId } });
    } catch (error) {
      alert("Invalid credentials or server error");
      console.error("Login failed", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={6}
        sx={{
          mt: 8,
          p: 4,
          borderRadius: 3,
          backgroundColor: "#f0f4ff",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom color="#2b3e6c">
          Student Login
        </Typography>

        <Box
          component="form"
          onSubmit={handleFormSubmit}
          sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Student ID"
            variant="outlined"
            fullWidth
            required
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#2b3e6c",
              "&:hover": { backgroundColor: "#1e2c50" },
              mt: 1,
            }}
          >
            Login with Credentials
          </Button>
        </Box>

        <Divider sx={{ my: 3, fontWeight: "bold", color: "#666" }}>OR</Divider>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <GoogleLogin onSuccess={handleGoogleLogin} />
        </Box>
      </Paper>
    </Container>
  );
};

export default StudentLogin;
