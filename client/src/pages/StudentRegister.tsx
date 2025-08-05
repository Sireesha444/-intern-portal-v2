// src/pages/StudentRegister.tsx
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StudentRegister: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/students/register", formData);
      if (res.status === 201) {
        navigate("/student-dashboard", { state: { isNew: true } });
      }
    } catch (err: any) {
      console.error("❌ Registration error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Student Registration
        </Typography>
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          margin="normal"
          onChange={handleChange}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Box mt={2}>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default StudentRegister;
