// src/pages/HomePage.tsx
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
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleLogin = (type: "student" | "company") => {
    handleClose();
    if (type === "student") navigate("/student-login");
    else navigate("/company-login");
  };

  return (
    <Box>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold">
            Internship Portal
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleMenuClick}
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            Login
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={() => handleLogin("student")}>Student Login</MenuItem>
            <MenuItem onClick={() => handleLogin("company")}>Company Login (2FA)</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Categories */}
      <Categories />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default HomePage;
