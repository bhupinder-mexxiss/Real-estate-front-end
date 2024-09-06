import React from "react";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import dashboardBg from "../../assets/images/dashboardBg.png";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="bg-white dashboard relative">
      <img src={dashboardBg} alt="" className="absolute top-0 left-0 w-full" />
      <div className="max-w-[1400px] mx-auto">
        <div className="flex">
          <div className="min-w-[276px] w-[276px] relative">
            <Sidebar />
          </div>
          <div className="mt-[120px] w-full">
            <div className="h-[calc(100vh_-_120px)] overflow-auto pt-[30px] pl-12 pr-5 pb-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
