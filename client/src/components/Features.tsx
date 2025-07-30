// src/components/Features.tsx

import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import VerifiedIcon from "@mui/icons-material/Verified";

const featureData = [
  {
    icon: <SchoolIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Student Profiles",
    description: "Students can create professional profiles and apply for internships with ease.",
  },
  {
    icon: <BusinessCenterIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Verified Companies",
    description: "Only verified companies can post internships, ensuring a safe and trusted platform.",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Easy Selection Process",
    description: "Streamlined communication and selection process between students and recruiters.",
  },
];

const Features: React.FC = () => {
  return (
    <Box sx={{ px: 4, py: 6, backgroundColor: "#ffffff" }}>
      <Typography variant="h4" fontWeight="bold" align="center" sx={{ mb: 4 }}>
        Features
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {featureData.map((feature, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              width: { xs: "100%", sm: "300px" },
              p: 4,
              textAlign: "center",
              borderRadius: 4,
              flexShrink: 0,
            }}
          >
            <Box sx={{ mb: 2 }}>{feature.icon}</Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {feature.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {feature.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Features;
