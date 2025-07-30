// src/components/Categories.tsx

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ComputerIcon from "@mui/icons-material/Computer";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import ScienceIcon from "@mui/icons-material/Science";

interface Category {
  title: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { title: "Engineering", icon: <ComputerIcon fontSize="large" /> },
  { title: "Design", icon: <DesignServicesIcon fontSize="large" /> },
  { title: "Marketing", icon: <BusinessIcon fontSize="large" /> },
  { title: "Research", icon: <ScienceIcon fontSize="large" /> },
  { title: "Language", icon: <LanguageIcon fontSize="large" /> },
  { title: "Other Internships", icon: <WorkOutlineIcon fontSize="large" /> },
];

const Categories: React.FC = () => {
  return (
    <Box sx={{ p: 5, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Internship Categories
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          mt: 4,
        }}
      >
        {categories.map((category, index) => (
          <Card
            key={index}
            sx={{
              width: 200,
              textAlign: "center",
              borderRadius: 4,
              p: 2,
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6,
              },
            }}
            elevation={3}
          >
            <CardContent>
              <Box sx={{ color: "#1976d2" }}>{category.icon}</Box>
              <Typography variant="h6" mt={2}>
                {category.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
