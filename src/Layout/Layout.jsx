import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header"; // Example component
import Footer from "../Components/Footer/Footer"; // Example component
import useScrollToTop from "../Components/utils/useScrollToTop";

const Layout = () => {
  const location = useLocation();
  const Paths = [
    "/",
    "/find-agent",
    "/find-broker",
    "/explore",
    "/insightshub",
    "/mortgage",
  ];
  const isPaths = Paths.includes(location.pathname);

  useScrollToTop();
  return (
    <div>
      <Header />
      <main
        className={`main ${isPaths ? "" : " pt-16 sm:pt-20 lg:pt-[120px]"}`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
