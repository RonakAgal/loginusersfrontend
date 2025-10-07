import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalAuthContext } from "../Context/AuthContext";

const PrivateRoute = () => {
  const { loggedInUser } = useContext(GlobalAuthContext);

  return loggedInUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
