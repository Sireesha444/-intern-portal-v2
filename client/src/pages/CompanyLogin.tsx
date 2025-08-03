import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/CompanyLogin.css";

const CompanyLogin: React.FC = () => {
  const [step, setStep] = useState<"login" | "otp">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/company/login", { email, password });
      if (res.data.success) {
        setStep("otp");
      } else {
        alert(res.data.message || "Failed to send OTP");
      }
    } catch (err) {
      alert("Login failed.");
      console.error(err);
    }
  };

  const handleOTPVerify = async () => {
    try {
      const res = await axios.post("/api/company/verify-otp", { email, otp });
      if (res.data.message === "Login successful") {
        navigate("/company-dashboard");
      } else {
        alert("Invalid OTP.");
      }
    } catch (err) {
      alert("OTP verification failed.");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      {step === "login" ? (
        <>
          <h2>Company Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Send OTP</button>
        </>
      ) : (
        <>
          <h2>Enter OTP</h2>
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button onClick={handleOTPVerify}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default CompanyLogin;
