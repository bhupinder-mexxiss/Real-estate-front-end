import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop/Shop";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import FindAgent from "./Pages/FindAgent/FindAgent";
import FindBroker from "./Pages/FindBroker/FindBroker";
import AgentDetail from "./Pages/AgentDetail/AgentDetail";
import BrokerDetail from "./Pages/BrokerDetail/BrokerDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Auth from "./Pages/Auth/Auth";
import CreateAccount from "./Pages/Auth/CreateAccount";
import OtpVerification from "./Pages/Auth/OtpVerification";
import ResetPassword from "./Pages/Auth/ResetPassword";
import NewProjectDetail from "./Pages/NewProjectDetail/NewProjectDetail";
import Blog from "./Pages/Blog/Blog";
import InsightHub from "./Pages/InsightHub/InsightHub";
import DataGuru from "./Pages/DataGuru/DataGuru";
import BlogDetail from "./Pages/Blog/BlogDetail";
import SavedProperties from "./Pages/SavedProperties/SavedProperties";
import Mortgage from "./Pages/Mortgage/Mortgage";
import Step1 from "./Pages/AddProperties/Step1";
import Step2 from "./Pages/AddProperties/Step2";
import AddProperty from "./Pages/AddProperties/AddProperty";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Components/Dashboard/Home";
import Leads from "./Components/Dashboard/Leads";
import Listing from "./Components/Dashboard/Listing";
import MyProfile from "./Components/Dashboard/MyProfile";
import ChangePassword from "./Components/Dashboard/ChangePassword";
import Signin from "./Admin/Auth/Signin";
import AdminResetPassword from "./Admin/Auth/ResetPassword";
import NewPassword from "./Admin/Auth/NewPassword";
import SendResetLink from "./Admin/Auth/SendResetLink";
import AdminDashboard from "./Admin/Dashboard/AdminDashboard";
import AdminDashboardHome from "./Components/AdminDashboard/Dashboard/Dashboard";
import Users from "./Components/AdminDashboard/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Ensure Layout is used here, so it gets the Router context
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rent",
        element: <Shop />,
      },
      {
        path: "/rent/:id",
        element: <ProductDetail />,
      },
      {
        path: "/buy",
        element: <Shop />,
      },
      {
        path: "/buy/:id",
        element: <ProductDetail />,
      },
      {
        path: "/commercial",
        element: <Shop />,
      },
      {
        path: "/commercial/:id",
        element: <ProductDetail />,
      },
      {
        path: "/new-projects",
        element: <Shop />,
      },
      {
        path: "/new-project/:id",
        element: <NewProjectDetail />,
      },
      {
        path: "/find-agent",
        element: <FindAgent />,
      },
      {
        path: "/agent/:id",
        element: <AgentDetail />,
      },
      {
        path: "/find-broker",
        element: <FindBroker />,
      },
      {
        path: "/broker/:id",
        element: <BrokerDetail />,
      },
      {
        path: "/explore",
        element: <DataGuru />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
      },
      {
        path: "/insightshub",
        element: <InsightHub />,
      },
      {
        path: "/mortgage",
        element: <Mortgage />,
      },
      {
        path: "/user/saved-properties",
        element: <SavedProperties />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <Auth />,
  },
  {
    path: "/auth/signup",
    element: <CreateAccount />,
  },
  {
    path: "/auth/otp-verify",
    element: <OtpVerification />,
  },
  {
    path: "/auth/forgot-password",
    element: <ResetPassword />,
  },
  {
    path: "/add-property",
    element: <Step1 />,
  },
  {
    path: "/add-property/step-2",
    element: <Step2 />,
  },
  {
    path: "/list-property/new",
    element: <AddProperty />,
  },
  {
    path: "/user-panel",
    element: <Dashboard />,
    children: [
      {
        index: true,
        loader: () => redirect("/user-panel/dashboard"),
      },
      {
        path: "dashboard",
        element: <DashboardHome />,
      },
      {
        path: "leads",
        element: <Leads />,
      },
      {
        path: "my-listings",
        element: <Listing />,
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/admin/sign-in",
    element: <Signin />,
  },
  {
    path: "/admin/reset-password",
    element: <AdminResetPassword />,
  },
  {
    path: "/admin/reset-password/send-link",
    element: <SendResetLink />,
  },
  {
    path: "/admin/new-password",
    element: <NewPassword />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [
      {
        index: true,
        loader: () => redirect("/admin/dashboard"),
      },
      {
        path:"dashboard",
        element: <AdminDashboardHome/>
      },
      {
        path:"users",
        element: <Users/>
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
