import React from "react";
import { Link } from "react-router-dom";
import "../styles/StudentDashboard.css"; // Ensure this file exists and is correctly linked

const StudentDashboard: React.FC = () => {
  return (
    <div className="student-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <span className="emoji">🎓</span>
          <h1>Student Dashboard</h1>
        </div>
        <Link to="/" className="logout-button">
          Logout
        </Link>
      </div>

      {/* Welcome message */}
      <div className="welcome-message">
        <h2>Welcome, Student!</h2>
        <p>Find your dream internship, apply easily, and track your application status.</p>
      </div>

      {/* Cards */}
      <div className="card-container">
        <div className="card">
          <h3>📋 View Available Internships</h3>
          <p>Browse and apply to internships that match your skills and interests.</p>
          <Link to="/internships">
            <button className="primary-btn">Explore Internships</button>
          </Link>
        </div>

        <div className="card">
          <h3>📄 View Applications</h3>
          <p>Check your application status and history.</p>
          <Link to="/applications">
            <button className="primary-btn">My Applications</button>
          </Link>
        </div>

        <div className="card">
          <h3>📝 Update Profile</h3>
          <p>Keep your personal details and resume up to date.</p>
          <Link to="/profile">
            <button className="primary-btn">Edit Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
