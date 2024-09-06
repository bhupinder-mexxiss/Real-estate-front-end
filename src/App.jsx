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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
