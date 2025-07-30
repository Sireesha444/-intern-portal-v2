// src/components/Footer.tsx

import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2", // Same as navbar
        color: "#fff",
        py: 4,
        px: 2,
        textAlign: "center",
        mt: 4,
      }}
    >
      <Typography variant="h6" gutterBottom fontWeight="bold">
        Intern Portal
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4,
          mb: 2,
        }}
      >
        <Link href="/" color="inherit" underline="hover">
          Home
        </Link>
        <Link href="/student-login" color="inherit" underline="hover">
          Student Login
        </Link>
        <Link href="/company-login" color="inherit" underline="hover">
          Company Login
        </Link>
        <Link href="/contact" color="inherit" underline="hover">
          Contact
        </Link>
      </Box>

      <Typography variant="body2">
        © {new Date().getFullYear()} Intern Portal. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
