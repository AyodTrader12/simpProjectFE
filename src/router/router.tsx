import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/SCREEN/landingPage";
import AuthLayout from "../layout/authLayout";
import Register from "../pages/AUTH/register";
import Login from "../pages/AUTH/Login";
import Verify from "../pages/AUTH/verify";
import ForgetPassword from "../pages/AUTH/forgetPassword";
import ResetPassword from "../pages/AUTH/resetPassword";
import CreateAccountSuccess from "../pages/AUTH/registerMessage";
import Layout from "../layout/layout";
import HomePage from "../pages/SCREEN/homePage";
import ForgetPasswordMsg from "../pages/AUTH/forgetPasswordMsg";
import Dashboard from "../pages/SCREEN/DashBoard";
// import PrivateRoute from "../componenets/privateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, path: "", element: <LandingPage /> },
      { path: "home", element: <HomePage /> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { index: true, path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "verify-account", element: <Verify /> },
      { path: "forgot-password", element: <ForgetPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "registerMsg", element: <CreateAccountSuccess /> },
      { path: "forgetMsg", element: <ForgetPasswordMsg /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    
  },
]);
export default router;