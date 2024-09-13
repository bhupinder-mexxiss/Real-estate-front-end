import { CloseOutlined, KeyboardArrowDown } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.css";

const MobileNav = ({ isActive, setIsActive }) => {
  document.body.style.overflow = isActive ? "hidden" : "auto";
  const [isDropActive, setIsDropActive] = useState(false);
  const location = useLocation();
  const explorePaths = ["/explore", "/blog", "/insightshub", "/mortgage"];
  const isExploreActive = explorePaths.includes(location.pathname);
  const toggle = () => {
    setIsDropActive(!isDropActive);
  };
  useEffect(() => {
    if (isExploreActive) {
      setIsDropActive(true);
    }
  }, [isExploreActive]);
  console.log(isDropActive);
  return (
    <div className={` mobileNav ${isActive && "show"}`}>
      <div
        className="bg_overlay top-0 left-0 w-full h-full fixed bg-black z-[9999]"
        onClick={() => setIsActive(false)}
      ></div>
      <div className="h-screen fixed top-0 left-0 w-[300px] z-[9999] bg-white menu">
        <div className="flex justify-between p-4 border-b">
          <p className="text-lg font-medium">Main Menu</p>
          <span onClick={() => setIsActive(false)}>
            <CloseOutlined />
          </span>
        </div>
        <div className="h-[calc(100vh_-_60px)] overflow-auto pb-10">
          <div className=" px-4 py-5">
            <Link
              to="/add-property"
              className="inline-block w-full loginBtn font-medium bg-primary duration-300 py-1.5 lg:py-2 sm:px-2.5 2xl:px-5 text-base lg:text-lg border border-primary rounded-md lg:rounded-xl text-white text-center mb-3"
              onClick={() => setIsActive(false)}
            >
              List Property
            </Link>
            <Link
              to="/user/saved-properties"
              className="inline-block w-full loginBtn font-medium duration-300 py-1.5 lg:py-2 sm:px-2.5 2xl:px-5 text-base lg:text-lg border-[1.6px] border-primary rounded-md lg:rounded-xl text-primary text-center"
              onClick={() => setIsActive(false)}
            >
              Saved Properties
            </Link>
          </div>
          <ul className="border-t ">
            <li>
              <NavLink
                onClick={() => setIsActive(false)}
                to="/buy"
                className={({ isActive, isPending }) =>
                  ` py-2.5 border-b hover:text-primary w-full inline-block border-l-4 border-l-white pl-4 ${
                    isActive
                      ? "bg-[#00858e09] text-primary font-medium"
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
                onClick={() => setIsActive(false)}
                className={({ isActive, isPending }) =>
                  ` py-2.5 border-b hover:text-primary w-full inline-block border-l-4 border-l-white pl-4 ${
                    isActive
                      ? "bg-[#00858e09] text-primary font-medium"
                      : isPending
                      ? "pending"
                      : ""
                  }`
                }
              >
                Rentals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/commercial"
                onClick={() => setIsActive(false)}
                className={({ isActive, isPending }) =>
                  ` py-2.5 border-b hover:text-primary w-full inline-block border-l-4 border-l-white pl-4 ${
                    isActive
                      ? "bg-[#00858e09] text-primary font-medium"
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
                onClick={() => setIsActive(false)}
                className={({ isActive, isPending }) =>
                  ` py-2.5 border-b hover:text-primary w-full inline-block border-l-4 border-l-white pl-4 ${
                    isActive
                      ? "bg-[#00858e09] text-primary font-medium"
                      : isPending
                      ? "pending"
                      : ""
                  }`
                }
              >
                New Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/find-agent"
                onClick={() => setIsActive(false)}
                className={({ isActive, isPending }) =>
                  ` py-2.5 border-b hover:text-primary w-full inline-block border-l-4 border-l-white pl-4 ${
                    isActive
                      ? "bg-[#00858e09] text-primary font-medium"
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
              <div className="border-b">
                <button
                  onClick={toggle}
                  className={`cursor-pointer py-2.5  hover:text-primary w-full border-l-4 border-l-white px-4 ${
                    isExploreActive
                      ? "bg-[#00858e09] text-primary font-medium"
                      : ""
                  }`}
                >
                  <span className="flex items-center justify-between ">
                    Explore{" "}
                    <span
                      className={` !duration-300 ${
                        isDropActive ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <KeyboardArrowDown />
                    </span>
                  </span>
                </button>
                {isDropActive ? (
                  <ul>
                    <li>
                      <NavLink
                        to="/explore"
                        onClick={() => setIsActive(false)}
                        className={({ isActive, isPending }) =>
                          ` py-2.5  hover:text-primary w-full inline-block border-l-4 border-l-white pl-6 ${
                            isActive
                              ? "bg-[#00858e1f] text-primary"
                              : isPending
                              ? "pending"
                              : ""
                          }`
                        }
                      >
                        Explore With DataGuru
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        onClick={() => setIsActive(false)}
                        className={({ isActive, isPending }) =>
                          ` py-2.5  hover:text-primary w-full inline-block border-l-4 border-l-white pl-6 ${
                            isActive
                              ? "bg-[#00858e1f] text-primary"
                              : isPending
                              ? "pending"
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
                        onClick={() => setIsActive(false)}
                        className={({ isActive, isPending }) =>
                          ` py-2.5  hover:text-primary w-full inline-block border-l-4 border-l-white pl-6 ${
                            isActive
                              ? "bg-[#00858e1f] text-primary"
                              : isPending
                              ? "pending"
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
                        onClick={() => setIsActive(false)}
                        className={({ isActive, isPending }) =>
                          ` py-2.5  hover:text-primary w-full inline-block border-l-4 border-l-white pl-6 ${
                            isActive
                              ? "bg-[#00858e1f] text-primary"
                              : isPending
                              ? "pending"
                              : ""
                          }`
                        }
                      >
                        Mortgages
                      </NavLink>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
