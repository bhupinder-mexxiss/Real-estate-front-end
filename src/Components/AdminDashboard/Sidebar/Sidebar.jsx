import React, { useState } from "react";
import users from "../../../assets/icons/users.png";
import sellers from "../../../assets/icons/sellers.png";
import properties from "../../../assets/icons/properties.png";
import dashboard from "../../../assets/icons/dashboard.png";
import settingIcon from "../../../assets/icons/settingIcon.png";
import changepassword from "../../../assets/icons/changepassword.png";
import { NavLink } from "react-router-dom";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const handleToggle = () => {
    setIsActiveMenu(!isActiveMenu);
  };
  return (
    <div
      className={`${
        isActiveMenu ? "min-w-[86px] w-[86px]" : "min-w-[250px] w-[250px]"
      } duration-100 h-screen rounded-r-[30px] bg-white relative`}
    >
      <button
        className="w-10 h-10 rounded-full border-[#4E307A1A] bg-white border-2 flex items-center justify-center absolute -right-5 top-1/2 -translate-y-1/2 text-[#8B8B8B]"
        onClick={handleToggle}
      >
        {isActiveMenu ? (
          <KeyboardArrowRightOutlined />
        ) : (
          <KeyboardArrowLeftOutlined />
        )}
      </button>
      <div className="pt-36 h-screen overflow-auto pb-10 ">
        <ul>
          <li className="py-2">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `flex gap-3 items-center text-[#8B8B8B] px-8 text-nowrap py-2 ${
                  isActive
                    ? "imgColor before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-white before:rounded-r "
                    : ""
                }`
              }
            >
              <img src={dashboard} className={`min-w-6 w-6 `} alt="dashboard" />
              <span className={`${isActiveMenu && "hidden"}`}>Dashboard</span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `flex gap-3 items-center text-[#8B8B8B] px-8 text-nowrap py-2 ${
                  isActive
                    ? "imgColor before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-white before:rounded-r "
                    : ""
                }`
              }
            >
              <img src={users} className={`min-w-6 w-6`} alt="Users" />
              <span className={`${isActiveMenu && "hidden"}`}>Users</span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/admin/sellers"
              className={({ isActive }) =>
                `flex gap-3 items-center text-[#8B8B8B] px-8 text-nowrap py-2 ${
                  isActive
                    ? "imgColor before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-white before:rounded-r "
                    : ""
                }`
              }
            >
              <img src={sellers} className={`min-w-6 w-6 `} alt="Sellers" />
              <span className={`${isActiveMenu && "hidden"}`}>Sellers</span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/admin/properties"
              className={({ isActive }) =>
                `flex gap-3 items-center text-[#8B8B8B] px-8 text-nowrap py-2 ${
                  isActive
                    ? "imgColor before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-white before:rounded-r "
                    : ""
                }`
              }
            >
              <img
                src={properties}
                className={`min-w-6 w-6 `}
                alt="Properties"
              />
              <span className={`${isActiveMenu && "hidden"}`}>Properties</span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/admin/account-setting"
              className={({ isActive }) =>
                `flex gap-3 items-center text-[#8B8B8B] px-8 text-nowrap py-2 ${
                  isActive
                    ? "imgColor before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-white before:rounded-r "
                    : ""
                }`
              }
            >
              <img
                src={settingIcon}
                className={`min-w-6 w-6 `}
                alt="account-setting"
              />
              <span className={`${isActiveMenu && "hidden"}`}>
                Account Setting
              </span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/admin/reset-assword"
              className={({ isActive }) =>
                `flex gap-3 items-center text-[#8B8B8B] px-8 text-nowrap py-2 ${
                  isActive
                    ? "imgColor before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-white before:rounded-r "
                    : ""
                }`
              }
            >
              <img
                src={changepassword}
                className={`min-w-6 w-6 `}
                alt="Change Password"
              />
              <span className={`${isActiveMenu && "hidden"}`}>
                Change Password
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
