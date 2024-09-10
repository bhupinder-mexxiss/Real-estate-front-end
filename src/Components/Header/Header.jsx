import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavMenu from "./NavMenu";
import MobileNav from "./MobileNav";
import { FavoriteBorderOutlined, Menu } from "@mui/icons-material";
import "./header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 300) {
        if (currentScrollY > lastScrollY) {
          headerRef.current.classList.add("!-translate-y-full");
          if (currentScrollY > 350) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        } else {
          headerRef.current.classList.remove("!-translate-y-full");
        }
      } else {
        headerRef.current.classList.remove("!-translate-y-full");
        setIsSticky(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const Paths = [
    "/",
    "/find-agent",
    "/find-broker",
    "/explore",
    "/insightshub",
    "/mortgage",
  ];
  const isPaths = Paths.includes(location.pathname);
  useEffect(() => {
    if (headerRef.current) {
      // Check if path is '/' and add/remove class accordingly
      if (isPaths) {
        headerRef.current.classList.remove("white_header");
      } else {
        headerRef.current.classList.add("white_header");
      }
    }
  }, [isSticky, location.pathname]);

  return (
    <>
      <header
        className={`w-full z-[999] header duration-300  ${
          isSticky ? "sticky_header" : "absolute  py-2 sm:py-4 lg:py-9 top-0"
        } ${!isPaths && "border-b border-border1"}`}
        ref={headerRef}
      >
        <div className="container mx-auto">
          <nav
            className="flex items-center justify-between px-3 relative"
            aria-label="Global"
          >
            <div
              onClick={() => setIsActive(true)}
              className="flex flex-col menu_icon cursor-pointer lg:hidden"
            >
              <span className="inline-block h-0.5 w-[30px] bg-white mb-[4px] icon_1"></span>
              <span className="inline-block h-0.5 w-5 bg-white mb-[4px] icon_2"></span>
              <span className="inline-block h-0.5 w-3 bg-white icon_3"></span>
            </div>
            <div className="flex lg:pb-2">
              <Link to="/" className="-m-1.5 p-1.5">
                <img
                  className="h-12 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
            </div>
            <NavMenu />
            <div className="flex items-center gap-3 lg:pb-2">
              <Link to="/user/saved-properties" className="hidden w-8 md:w-10 h-8 md:h-10 rounded-full lg:flex items-center justify-center sm:border border-border1 hover:text-white hover:bg-primary hover:border-primary duration-300 saveBtn">
                <FavoriteBorderOutlined className="!text-lg md:!text-xl" />
              </Link>
              <Link
                to="/add-property"
                className="hidden lg:inline-block loginBtn font-medium lg:font-normal active:text-[#56c1c8] hover:text-[#00C4F4] lg:hover:text-white lg:hover:bg-primary duration-300 py-1.5 lg:py-2 sm:px-2.5 2xl:px-5 text-base lg:text-lg xl:text-xl sm:border hover:border-primary border-white rounded-md lg:rounded-xl text-white"
              >
                List Property
              </Link>
              <Link
                to="/auth/login"
                className="loginBtn font-medium lg:font-normal active:text-[#56c1c8] hover:text-[#00C4F4] lg:hover:text-white lg:hover:bg-primary duration-300 py-1.5 lg:py-2 sm:px-2.5 2xl:px-5 text-base lg:text-lg xl:text-xl sm:border hover:border-primary border-white rounded-md lg:rounded-xl text-white"
              >
                Log In
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <MobileNav isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Header;
