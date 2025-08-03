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

interface GoogleUser {
  email?: string;
  name?: string;
  picture?: string;
  [key: string]: any;
}

const StudentLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Google login
  const handleGoogleLogin = (credentialResponse: any) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode<GoogleUser>(credentialResponse.credential);
      console.log("Google Login Success:", decoded);

      // Save decoded student info
      localStorage.setItem("student_token", credentialResponse.credential);
      localStorage.setItem("student", JSON.stringify({
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        loginType: "google",
      }));

      navigate("/student-dashboard");
    }
  };

  // Handle manual login
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Replace with actual API call to backend for validation
    const dummyStudent = {
      email,
      name: "Dummy Student",
      picture: "", // optional
      loginType: "credentials",
    };

    localStorage.setItem("student_token", "dummy_token");
    localStorage.setItem("student", JSON.stringify(dummyStudent));

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
