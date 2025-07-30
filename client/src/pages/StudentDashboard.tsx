import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Divider,
} from "@mui/material";
import { Notifications, Bookmark, Work } from "@mui/icons-material";

const StudentDashboard: React.FC = () => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        backgroundColor: "#f5faff",
        minHeight: "100vh",
        color: "#002f6c",
      }}
    >
      {/* Profile Card */}
      <Paper
        elevation={4}
        sx={{
          p: 3,
          borderRadius: 4,
          mb: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 3,
          backgroundColor: "#fff",
        }}
      >
        <Avatar
          sx={{ width: 90, height: 90 }}
          src="https://i.pravatar.cc/150?img=3"
        />
        <Box>
          <Typography variant="h5" fontWeight="bold" sx={{ color: "#1976d2" }}>
            Hi, Sireesha 👋
          </Typography>
          <Typography variant="body1" sx={{ color: "#666", mb: 1 }}>
            Final Year Computer Science Student
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#1976d2",
              borderColor: "#1976d2",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#e3f2fd" },
            }}
          >
            Edit Profile
          </Button>
        </Box>
      </Paper>

      {/* Dashboard Sections */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {/* Applied Internships */}
        <DashboardSection title="Applied Internships" icon={<Work />} items={[
          { title: "Frontend Developer - Google", date: "Applied on July 20, 2025" },
          { title: "ML Intern - Microsoft", date: "Applied on July 25, 2025" },
        ]} />

        {/* Saved Internships */}
        <DashboardSection title="Saved Internships" icon={<Bookmark />} items={[
          { title: "UI/UX Intern - Adobe" },
          { title: "Backend Developer - Amazon" },
        ]} />

        {/* Notifications */}
        <DashboardSection title="Notifications" icon={<Notifications />} items={[
          { title: "Your resume was viewed by Meta HR" },
          { title: "New internship matches your profile" },
        ]} />
      </Box>
    </Box>
  );
};

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  items: { title: string; date?: string }[];
}

const DashboardSection: React.FC<SectionProps> = ({ title, icon, items }) => {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, backgroundColor: "#fff" }} elevation={2}>
      <Typography variant="h6" fontWeight="bold" mb={2} sx={{ display: "flex", alignItems: "center", color: "#1976d2" }}>
        {icon}
        <span style={{ marginLeft: 8 }}>{title}</span>
      </Typography>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <ListItemText
                primary={item.title}
                secondary={item.date}
                sx={{
                  "& .MuiListItemText-primary": { fontWeight: 500 },
                  "& .MuiListItemText-secondary": { fontSize: 13, color: "#666" },
                }}
              />
            </ListItem>
            {index < items.length - 1 && <Divider sx={{ my: 1 }} />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default StudentDashboard;
