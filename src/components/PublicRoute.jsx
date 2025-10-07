import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalAuthContext } from "../Context/AuthContext";

const PublicRoute = () => {
  const { loggedInUser } = useContext(GlobalAuthContext);

  return !loggedInUser ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoute;
