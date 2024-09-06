import React from "react";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import dashboardBg from "../../assets/images/dashboardBg.png";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="bg-white dashboard relative">
      <img
        src={dashboardBg}
        alt=""
        className="lg:absolute top-0 left-0 w-full min-h-[120px] max-h-[120px] object-cover "
      />
      <div className="container lg:max-w-[1450px] mx-auto px-4 sm:px-2">
        <div className="lg:flex">
          <div className="min-w-[276px] w-[276px] relative hidden lg:block">
            <Sidebar />
          </div>
          <div className="lg:mt-[120px] w-full">
            <div className="min-h-[calc(100vh_-_120px)] lg:h-[calc(100vh_-_120px)] lg:overflow-y-auto pt-[30px] lg:pl-12 lg:pr-5 pb-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
