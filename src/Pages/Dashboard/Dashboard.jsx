import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import dashboardBg from "../../assets/images/dashboardBg.png";
import dashboardBg2 from "../../assets/images/dashboardBg.svg";
import userImg from "../../assets/images/userImg.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Dashboard.css";
import MobileMenu from "../../Components/Dashboard/MobileMenu";
import { MenuOutlined } from "@mui/icons-material";

const Dashboard = () => {
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (location.pathname === "/user-panel/dashboard") {
      setTitle("Dashboard");
    } else if (location.pathname === "/user-panel/leads") {
      setTitle("Leads");
    } else if (location.pathname === "/user-panel/my-listings") {
      setTitle("Listing");
    } else if (location.pathname === "/user-panel/my-profile") {
      setTitle("My Profile");
    } else if (location.pathname === "/user-panel/change-password") {
      setTitle("Change Password");
    } else if (location.pathname === "/user-panel/packages") {
      setTitle("Packages");
    }
  }, [location.pathname]);

  return (
    <div className="bg-white dashboard relative px-2 lg:px-0">
      <div className=""></div>
      <img
        src={dashboardBg2}
        alt=""
        style={{
          filter:
            "invert(4%) sepia(86%) saturate(1865%) hue-rotate(165deg) brightness(100%) contrast(60%)",  
        }}
        className="absolute top-0 left-0 w-full min-h-[120px] max-h-[120px] object-cover block rounded-b-[40px] object-right"
      />
      {/* <div className="absolute top-0 left-0 w-full sm:min-h-[100px] sm:max-h-[100px] min-h-[70px] max-h-[70px] bg-primary bg-opacity-60 sm:rounded-b-[58px] lg:hidden"></div> */}
      <div className="container lg:max-w-[1450px] mx-auto px-4 sm:px-2">
        <div className="py-3 flex items-center justify-between relative z-10 lg:hidden">
          <div className="flex gap-3 sm:gap-5">
            <button
              className="text-white"
              onClick={() => setIsActiveMobileMenu(true)}
            >
              <MenuOutlined className="!text-3xl" />
            </button>
            <h6 className="text-xl text-white">{title}</h6>
          </div>
          <div>
            <button className="border-2 border-[#E8E1F6] rounded-lg w-10 h-10 overflow-hidden">
              <img
                src={userImg}
                className="w-full h-full object-cover"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="lg:flex">
          <div className="min-w-[276px] w-[276px] relative hidden lg:block">
            <Sidebar />
          </div>
          <div className="lg:hidden">
            <MobileMenu
              isActiveMobileMenu={isActiveMobileMenu}
              setIsActiveMobileMenu={setIsActiveMobileMenu}
            />
          </div>
          <div className="mt-[31px]  lg:mt-[120px] w-full">
            <div className="min-h-[calc(100vh_-_100px)] lg:min-h-[calc(100vh_-_120px)] lg:h-[calc(100vh_-_120px)] lg:overflow-y-auto pt-10 lg:pt-[30px] lg:pl-12 lg:pr-5 pb-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
