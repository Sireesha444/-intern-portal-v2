import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Homepage sections
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [registerEl, setRegisterEl] = useState<null | HTMLElement>(null);

  const openLogin = Boolean(anchorEl);
  const openRegister = Boolean(registerEl);

  const navigate = useNavigate();

  // Handlers for login menu
  const handleLoginMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLoginClose = () => setAnchorEl(null);

  // Handlers for register menu
  const handleRegisterMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setRegisterEl(event.currentTarget);
  };
  const handleRegisterClose = () => setRegisterEl(null);

  const handleLogin = (type: "student" | "company") => {
    handleLoginClose();
    if (type === "student") navigate("/student-login");
    else navigate("/company-login");
  };

  const handleRegister = (type: "student" | "company") => {
    handleRegisterClose();
    if (type === "student") navigate("/student-register");
    else navigate("/company-register");
  };

  return (
    <Box>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold">
            Internship Portal
          </Typography>

          <Box>
            {/* Login Menu Button */}
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLoginMenuClick}
              sx={{ textTransform: "none", fontWeight: "bold", mr: 2 }}
            >
              Login
            </Button>

            {/* Register Menu Button */}
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleRegisterMenuClick}
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              Register
            </Button>

            {/* Login Dropdown */}
            <Menu anchorEl={anchorEl} open={openLogin} onClose={handleLoginClose}>
              <MenuItem onClick={() => handleLogin("student")}>Student Login</MenuItem>
              <MenuItem onClick={() => handleLogin("company")}>Company Login (2FA)</MenuItem>
            </Menu>

            {/* Register Dropdown */}
            <Menu anchorEl={registerEl} open={openRegister} onClose={handleRegisterClose}>
              <MenuItem onClick={() => handleRegister("student")}>Student Register</MenuItem>
              <MenuItem onClick={() => handleRegister("company")}>Company Register</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Homepage Sections */}
      <Hero />
      <Features />
      <Categories />
      <Testimonials />
      <Footer />
    </Box>
  );
};

export default HomePage;
