import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import StudentLogin from "./pages/StudentLogin";
import HomePage from "./pages/HomePage";
import CompanyLogin from "./pages/CompanyLogin";
import CompanyDashboard from "./pages/CompanyDashboard";
import PrivateRoute from "./components/PrivateRoute";
import "./styles/StudentDashboard.css";
import StudentRegister from "./pages/StudentRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/company-login" element={<CompanyLogin />} />
         <Route path="/student-register" element={<StudentRegister />} />

        {/* 🔐 Student Dashboard (Protected) */}
        <Route
          path="/student-dashboard"
          element={
            <PrivateRoute>
              <StudentDashboard />
            </PrivateRoute>
          }
        />

        {/* 🔐 Company Dashboard (Protected) */}
        <Route
          path="/company-dashboard"
          element={
            <PrivateRoute>
              <CompanyDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
