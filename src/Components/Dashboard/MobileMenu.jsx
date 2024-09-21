import { CloseOutlined } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ isActiveMobileMenu, setIsActiveMobileMenu }) => {
  document.body.style.overflow = isActiveMobileMenu ? "hidden" : "auto";
  return (
    <div className={` mobileNav ${isActiveMobileMenu && "show"}`}>
      <div
        className="bg_overlay top-0 left-0 w-full h-full fixed bg-black z-[9999]"
        onClick={() => setIsActiveMobileMenu(false)}
      ></div>
      <div className="h-screen fixed top-0 left-0 w-[300px] z-[9999] bg-white menu">
        <div className="flex justify-between p-4 border-b">
          <p className="text-lg font-medium">Main Menu</p>
          <span onClick={() => setIsActiveMobileMenu(false)}>
            <CloseOutlined />
          </span>
        </div>
        <div className="h-[calc(100vh_-_60px)] overflow-auto pb-10">
          <ul className="border-t ">
            <li>
              <NavLink
                onClick={() => setIsActiveMobileMenu(false)}
                to="/user-panel/dashboard"
                className={({ isActive, isPending }) =>
                  ` py-2.5 border-b hover:text-primary hover:bg-[#00858e09] w-full border-l-4 border-l-white pl-4 inline-block ${
                    isActive
                      ? "bg-[#00858e18] text-primary border-l-primary font-medium"
                      : isPending
                      ? "pending"
                      : ""
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsActiveMobileMenu(false)}
                to="/user-panel/leads"
                className={({ isActive, isPending }) =>
                  ` py-2.5 border-b hover:text-primary hover:bg-[#00858e09] w-full border-l-4 border-l-white pl-4 inline-block ${
                    isActive
                      ? "bg-[#00858e18] text-primary border-l-primary font-medium"
                      : isPending
                      ? "pending"
                      : ""
                  }`
                }
              >
                Leads
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsActiveMobileMenu(false)}
                to="/user-panel/my-listings"
                className={({ isActive, isPending }) =>
                  ` py-2.5 border-b hover:text-primary hover:bg-[#00858e09] w-full border-l-4 border-l-white pl-4 inline-block ${
                    isActive
                      ? "bg-[#00858e18] text-primary border-l-primary font-medium"
                      : isPending
                      ? "pending"
                      : ""
                  }`
                }
              >
                Listing
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsActiveMobileMenu(false)}
                to="/user-panel/my-profile"
                className={({ isActive, isPending }) =>
                  ` py-2.5 border-b hover:text-primary hover:bg-[#00858e09] w-full border-l-4 border-l-white pl-4 inline-block ${
                    isActive
                      ? "bg-[#00858e18] text-primary border-l-primary font-medium"
                      : isPending
                      ? "pending"
                      : ""
                  }`
                }
              >
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsActiveMobileMenu(false)}
                to="/user-panel/change-password"
                className={({ isActive, isPending }) =>
                  ` py-2.5 border-b hover:text-primary hover:bg-[#00858e09] w-full border-l-4 border-l-white pl-4 inline-block ${
                    isActive
                      ? "bg-[#00858e18] text-primary border-l-primary font-medium"
                      : isPending
                      ? "pending"
                      : ""
                  }`
                }
              >
                Change Password
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsActiveMobileMenu(false)}
                to="/"
                className={({ isActive, isPending }) =>
                  ` py-2.5 border-b hover:text-primary hover:bg-[#00858e09] w-full border-l-4 border-l-white pl-4 inline-block ${
                    isActive
                      ? "bg-[#00858e18] text-primary border-l-primary font-medium"
                      : isPending
                      ? "pending"
                      : ""
                  }`
                }
              >
                Back to website
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsActiveMobileMenu(false)}
                to="/"
                className={({ isActive, isPending }) =>
                  ` py-2.5 border-b hover:text-primary hover:bg-[#00858e09] w-full border-l-4 border-l-white pl-4 inline-block ${
                    isActive
                      ? "bg-[#00858e18] text-primary border-l-primary font-medium"
                      : isPending
                      ? "pending"
                      : ""
                  }`
                }
              >
                Log Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
