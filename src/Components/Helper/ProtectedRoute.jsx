import React from "react";
import UserContext from "../../UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return children;
  }

  if (login === false) {
    <Navigate to="/login" />;
  }

  return <></>;
};

export default ProtectedRoute;
