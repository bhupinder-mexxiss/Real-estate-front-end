import React from "react";
import user from "../../../assets/images/userImg.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white w-full rounded-[20px] shadow-[0px_1.67px_83.33px_0px_#0000001A] overflow-hidden my-5">
      <div className="flex flex-col justify-between py-7 px-5 h-[calc(100vh_-_40px)] overflow-auto">
        <div>
          <div className="text-center mb-[34px]">
            <div className="w-[90px] h-[90px] rounded-full overflow-hidden mx-auto mb-5">
              <img src={user} alt="" className="w-full h-full object-cover" />
            </div>
            <p className="text-xl font-medium text-[#1D1A22] mb-2 leading-6">
              Reet Narula
            </p>
            <p className="text-[#77767A] leading-5">reetnarula@gmail.com</p>
          </div>
          <ul>
            <li className="mb-2.5">
              <NavLink
                to="/user-panel/dashboard"
                className={({ isActive }) =>
                  ` rounded-2xl py-3.5 px-6 inline-block w-full duration-200 hover:text-white hover:bg-primary ${
                    isActive ? "text-white bg-primary" : "text-[#77767A]"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="mb-2.5">
              <NavLink
                to="/user-panel/leads"
                className={({ isActive }) =>
                  ` rounded-2xl py-3.5 px-6 inline-block w-full duration-200 hover:text-white hover:bg-primary ${
                    isActive ? "text-white bg-primary" : "text-[#77767A]"
                  }`
                }
              >
                Leads
              </NavLink>
            </li>
            <li className="mb-2.5">
              <NavLink
                to="/user-panel/my-listings"
                className={({ isActive }) =>
                  ` rounded-2xl py-3.5 px-6 inline-block w-full duration-200 hover:text-white hover:bg-primary ${
                    isActive ? "text-white bg-primary" : "text-[#77767A]"
                  }`
                }
              >
                Listing
              </NavLink>
            </li>
            <li className="mb-2.5">
              <NavLink
                to="/user-panel/my-profile"
                className={({ isActive }) =>
                  ` rounded-2xl py-3.5 px-6 inline-block w-full duration-200 hover:text-white hover:bg-primary ${
                    isActive ? "text-white bg-primary" : "text-[#77767A]"
                  }`
                }
              >
                My Profile
              </NavLink>
            </li>
            <li className="mb-2.5">
              <NavLink
                to="/user-panel/change-password"
                className={({ isActive }) =>
                  ` rounded-2xl py-3.5 px-6 inline-block w-full duration-200 hover:text-white hover:bg-primary ${
                    isActive ? "text-white bg-primary" : "text-[#77767A]"
                  }`
                }
              >
                Change Password
              </NavLink>
            </li>
            <li className="mb-2.5">
              <NavLink
                to="/"
                className={`rounded-2xl py-3.5 px-6 inline-block w-full duration-200 hover:text-white hover:bg-primary text-[#77767A]`}
              >
                Back to website
              </NavLink>
            </li>
            <li className="mb-2.5">
              <NavLink
                className={`rounded-2xl py-3.5 px-6 inline-block w-full duration-200 hover:text-white hover:bg-primary text-[#77767A]`}
              >
                Log out
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <button className="inline-block w-full text-white bg-primary rounded-2xl px-6 py-3.5 font-medium">
            + Add Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
