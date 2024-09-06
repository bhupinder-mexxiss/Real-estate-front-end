import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavMenu = () => {
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const location = useLocation();
  const explorePaths = ["/explore", "/blog", "/insightshub", "/mortgage"];
  const isExploreActive = explorePaths.includes(location.pathname);

  return (
    <div className="hidden lg:block">
      <ul className="flex gap-6 xl:gap-8 2xl:gap-10">
        <li>
          <NavLink
            to="/buy"
            className={({ isActive, isPending }) =>
              ` text-lg xl:text-xl text-white hover:text-[#00C4F4] nav_item duration-300 ${
                isActive
                  ? "!border-primary text-[#00C4F4] !font-medium isActive"
                  : isPending
                  ? "pending"
                  : ""
              }`
            }
          >
            Buy
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rent"
            className={({ isActive, isPending }) =>
              ` text-lg xl:text-xl text-white hover:text-[#00C4F4] nav_item duration-300 ${
                isActive
                  ? "!border-primary !text-[#00C4F4] !font-medium isActive"
                  : isPending
                  ? "pending"
                  : ""
              }`
            }
          >
            Rent
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/commercial"
            className={({ isActive, isPending }) =>
              ` text-lg xl:text-xl text-white hover:text-[#00C4F4] nav_item duration-300 ${
                isActive
                  ? "!border-primary !text-[#00C4F4] !font-medium isActive"
                  : isPending
                  ? "pending"
                  : ""
              }`
            }
          >
            Commercial
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new-projects"
            className={({ isActive, isPending }) =>
              ` text-lg xl:text-xl text-white hover:text-[#00C4F4] nav_item duration-300 ${
                isActive
                  ? "!border-primary !text-[#00C4F4] !font-medium isActive"
                  : isPending
                  ? "pending"
                  : ""
              }`
            }
          >
            New projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/find-agent"
            className={({ isActive, isPending }) =>
              ` text-lg xl:text-xl text-white hover:text-[#00C4F4] nav_item duration-300 ${
                isActive
                  ? "!border-primary !text-[#00C4F4] !font-medium isActive"
                  : isPending
                  ? "pending"
                  : ""
              }`
            }
          >
            Find Agent
          </NavLink>
        </li>
        <li>
          <div
            className="relative"
            onMouseEnter={() => setIsExploreHovered(true)}
            onMouseLeave={() => setIsExploreHovered(false)}
          >
            <button
              className={` text-lg xl:text-xl text-white hover:text-[#00C4F4] nav_item duration-300 relative pb-2 !pt-0 inline ${
                isExploreActive
                  ? "isActive !text-[#00C4F4] !font-medium"
                  : isExploreHovered
                  ? "isActive !text-[#00C4F4]"
                  : ""
              }`}
            >
              Explore <KeyboardArrowDownOutlined className="!text-lg" />
            </button>
            {/* {isExploreHovered && ( */}
            <div
              class={`absolute bg-white top-[calc(100%_-_-1px)] w-fit left-1/2 -translate-x-1/2 origin-top flex-col transition-all rounded py-1 shadow-2xl duration-300 ${
                isExploreHovered ? "flex" : "opacity-0 hidden"
              }`}
            >
              <ul>
                <li>
                  <NavLink
                    to="/explore"
                    className={({ isActive }) =>
                      `px-4 py-2 inline-block text-base text-text1 w-full hover:bg-slate-100 hover:text-primary duration-300 text-nowrap border-l-4 border-white hover:border-slate-100 ${
                        isActive
                          ? "font-medium !text-primary border-l-4 !border-primary bg-slate-100"
                          : ""
                      }`
                    }
                  >
                    Explore with DataGuru
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      `px-4 py-2 inline-block text-base text-text1 w-full hover:bg-slate-100 hover:text-primary duration-300 text-nowrap border-l-4 border-white hover:border-slate-100 ${
                        isActive
                          ? "font-medium !text-primary border-l-4 !border-primary bg-slate-100"
                          : ""
                      }`
                    }
                  >
                    Property Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/insightshub"
                    className={({ isActive }) =>
                      `px-4 py-2 inline-block text-base text-text1 w-full hover:bg-slate-100 hover:text-primary duration-300 text-nowrap border-l-4 border-white hover:border-slate-100 ${
                        isActive
                          ? "font-medium !text-primary border-l-4 !border-primary bg-slate-100"
                          : ""
                      }`
                    }
                  >
                    Insights Hub
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/mortgage"
                    className={({ isActive }) =>
                      `px-4 py-2 inline-block text-base text-text1 w-full hover:bg-slate-100 hover:text-primary duration-300 text-nowrap border-l-4 border-white hover:border-slate-100 ${
                        isActive
                          ? "font-medium !text-primary border-l-4 !border-primary bg-slate-100"
                          : ""
                      }`
                    }
                  >
                    Mortgages
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* )} */}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
