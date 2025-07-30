import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Business, WorkOutline, AddCircleOutline } from "@mui/icons-material";

const CompanyDashboard: React.FC = () => {
  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: "#f5faff",
        minHeight: "100vh",
        color: "#002f6c",
      }}
    >
      {/* Company Profile Header */}
      <Box
        sx={{
          backgroundColor: "white",
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
          mb: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{ width: 80, height: 80, mr: 3 }}
            src="https://i.pravatar.cc/150?img=5"
          />
          <Box>
            <Typography variant="h5" fontWeight="bold">
              Welcome, ABC Pvt Ltd 👋
            </Typography>
            <Typography variant="body1" color="gray">
              Internship Provider | Tech Industry
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mt: 1,
                color: "#1976d2",
                borderColor: "#1976d2",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
            >
              Edit Company Profile
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Dashboard Sections */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* Posted Internships */}
        <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            <WorkOutline sx={{ mr: 1 }} /> Posted Internships
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="React Developer Intern" secondary="Posted on July 15, 2025" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Data Analyst Intern" secondary="Posted on July 28, 2025" />
            </ListItem>
          </List>
        </Paper>

        {/* Applications Received */}
        <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            <Business sx={{ mr: 1 }} /> Applications Received
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Sireesha - React Developer Intern" secondary="Received on July 29, 2025" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Rohit - Data Analyst Intern" secondary="Received on July 30, 2025" />
            </ListItem>
          </List>
        </Paper>

        {/* Add New Internship */}
        <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            <AddCircleOutline sx={{ mr: 1 }} /> Post New Internship
          </Typography>
          <Button variant="contained" color="primary">
            Post Internship
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default CompanyDashboard;

