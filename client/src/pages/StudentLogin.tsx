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
import type { JwtPayload } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const StudentLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = (credentialResponse: any) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode<JwtPayload>(credentialResponse.credential);
      console.log("Google Login Success:", decoded);

      // Store token and redirect
      localStorage.setItem("student_token", credentialResponse.credential);
      navigate("/student-dashboard");
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Connect to your backend login API
    console.log("Normal Login:", { email, password });

    // Simulate login and redirect
    localStorage.setItem("student_token", "dummy_token");
    navigate("/student-dashboard");
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
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <Divider sx={{ my: 3, fontWeight: "bold", color: "#666" }}>
          OR
        </Divider>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <GoogleLogin onSuccess={handleGoogleLogin} />
        </Box>
      </Paper>
    </Container>
  );
};

export default StudentLogin;
