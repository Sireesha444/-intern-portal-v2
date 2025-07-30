import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CompanyLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Call your login API here
    console.log("Email:", email);
    console.log("Password:", password);

    // Navigate to dashboard after login
    navigate("/company-dashboard");
  };

  return (
    <Box
      sx={{
        width: "100vw",  
        height: "100vh",
        background: "linear-gradient(to right, #1976d2, #42a5f5)", // Blue background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: "3rem",
          borderRadius: "16px",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
          backgroundColor: "#ffffff", // White card
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          Company Login
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
          Enter your credentials to continue
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mb: 2 }}
          >
            Login
          </Button>

          <Link href="/company/otp-login" underline="hover" sx={{ fontSize: 14 }}>
            Or login with OTP
          </Link>
        </form>
      </Paper>
    </Box>
  );
};

export default CompanyLogin;
