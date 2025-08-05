import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Paper,
  Avatar,
  LinearProgress,
  Card,
  CardContent,
  CardActions,
  Divider,
  Modal,
  IconButton,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const studentFromStorage = localStorage.getItem("student");
    const studentId = studentFromStorage ? JSON.parse(studentFromStorage).studentId : null;

    if (!studentId) {
      navigate("/student-login");
      return;
    }

    axios
      .get(`http://localhost:5000/api/students/${studentId}`)
      .then((res) => {
        setStudentData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch student:", err);
        navigate("/student-login");
      });
  }, [navigate]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6">Loading your dashboard...</Typography>
      </Box>
    );
  }

  const studentName = studentData?.name || "Student";
  const studentEmail = studentData?.email || "student@example.com";
  const studentId = studentData?.studentId || "STU0000";

  return (
    <Box>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold">
            Internship Portal
          </Typography>
          <Box display="flex" gap={2}>
            <Button color="inherit" startIcon={<WorkIcon />}>Internships</Button>
            <Button color="inherit" startIcon={<AccountCircleIcon />} onClick={() => setShowProfile(true)}>Profile</Button>
            <Button
              color="inherit"
              startIcon={<LogoutIcon />}
              onClick={() => {
                localStorage.removeItem("student");
                localStorage.removeItem("student_token");
                navigate("/student-login");
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Paper elevation={3} sx={{ m: 4, p: 4, background: "#e3f2fd", textAlign: "center" }}>
        <Avatar sx={{ width: 72, height: 72, margin: "auto", bgcolor: "#1976d2" }}>
          {studentName.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="h4" fontWeight="bold" mt={2} gutterBottom>
          {`Welcome, ${studentName}!`}
        </Typography>
        <Typography variant="subtitle1">
          Discover internships tailored to your skills and interests.
        </Typography>
      </Paper>

      {/* Featured Internships */}
      <Box sx={{ px: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          🔥 Featured Internships
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          Find opportunities from top companies that match your interests.
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center">
          <Card sx={{ width: 300 }}>
            <img
              src="https://source.unsplash.com/featured/?technology"
              alt="internship"
              style={{ height: 140, width: "100%", objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">UI/UX Design Intern</Typography>
              <Typography color="text.secondary">DesignX Studio</Typography>
              <Typography mt={1}>💰 ₹8,000/month</Typography>
            </CardContent>
            <CardActions>
              <Button fullWidth variant="contained" color="primary">
                Apply Now
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ width: 300 }}>
            <img
              src="https://source.unsplash.com/featured/?coding"
              alt="internship"
              style={{ height: 140, width: "100%", objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Full Stack Developer</Typography>
              <Typography color="text.secondary">CodeCraft</Typography>
              <Typography mt={1}>💰 ₹12,000/month</Typography>
            </CardContent>
            <CardActions>
              <Button fullWidth variant="contained" color="primary">
                Apply Now
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>

      {/* Profile Completion */}
      <Box sx={{ p: 4, display: "flex", flexDirection: "column", gap: 4 }}>
        <Paper elevation={2} sx={{ p: 3, maxWidth: 400 }}>
          <Typography fontWeight="bold">📈 Profile Completion</Typography>
          <LinearProgress variant="determinate" value={70} sx={{ my: 2 }} />
          <Button fullWidth variant="outlined">Update Profile</Button>
        </Paper>
      </Box>

      {/* Profile Modal */}
      <Modal open={showProfile} onClose={() => setShowProfile(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">👤 Your Account Info</Typography>
            <IconButton onClick={() => setShowProfile(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Typography><strong>Name:</strong> {studentName}</Typography>
          <Typography><strong>Email:</strong> {studentEmail}</Typography>
          <Typography><strong>Student ID:</strong> {studentId}</Typography>
        </Box>
      </Modal>

      {/* Footer */}
      <Box textAlign="center" py={3} bgcolor="#f5f5f5">
        <Typography variant="body2" color="text.secondary">
          © 2025 Internship Portal | Designed with ❤️ by your team
        </Typography>
      </Box>
    </Box>
  );
};

export default StudentDashboard;
