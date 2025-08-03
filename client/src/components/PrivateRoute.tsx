import React from "react";
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const token = localStorage.getItem("student_token");
  return token ? <>{children}</> : <Navigate to="/student-login" />;
};

export default PrivateRoute;
