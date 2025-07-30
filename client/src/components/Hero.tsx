// src/components/Hero.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/hero-img.png"; // Make sure this exists

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: 4,
        py: 6,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Start your Internship Journey Today!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Connecting with top Companies for valuable experiences.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/student-login")}
          sx={{ backgroundColor: "#1976d2", fontWeight: "bold" }}
        >
          Get Started
        </Button>
      </Box>
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <img
          src={HeroImage}
          alt="hero"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
