import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Layout from "../components/Layout";
import Home from "../Pages/Home";
import PublicRoute from "../components/PublicRoute";
import PrivateRoute from "../components/PrivateRoute";

export let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <PublicRoute />, 
        children: [
          {
            index: true,
            element: <Signup />,
          },
          {
            path: "/login",
            element: <Login />,
          },
        ],
      },
      {
        element: <PrivateRoute />, 
        children: [
          {
            path: "/home",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
