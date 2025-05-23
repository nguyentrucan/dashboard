import Login from "./../../views/auth/Login";
import Register from "./../../views/auth/Register";
import AdminLogin from "./../../views/auth/AdminLogin";
import Home from "./../../views/Home";
import Unauthorized from "../../views/Unauthorized";

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
];

export default publicRoutes;
