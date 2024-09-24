import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/icons/searchIcon.png";
import mapBg from "../../assets/images/mapBg.png";
import house1 from "../../assets/images/house1.png";
import house2 from "../../assets/images/house2.png";
import house3 from "../../assets/images/house3.png";
import house4 from "../../assets/images/house4.png";
import adImg from "../../assets/images/adImg.png";
import "./Shop.css";
import {
  CloseOutlined,
  FilterAltOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  NotificationsNoneOutlined,
  PlaceOutlined,
} from "@mui/icons-material";
import Filter from "../../Components/Filter/Filter";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Link, useLocation } from "react-router-dom";
import NewProjectCard from "../../Components/ProductCard/NewProjectCard";
import CreateAlert from "../../Components/Modals/CreateAlert/CreateAlert";

const Shop = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [sortShow, setSortShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [selectedOption, setSelectedOption] = useState("Newest First");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/buy") {
      setTitle("Available for Sale in UAE");
      setLink("buy");
    } else if (location.pathname === "/rent") {
      setTitle("Available for Rent in UAE");
      setLink("rent");
    } else if (location.pathname === "/commercial") {
      setTitle("Commercial Properties for Rent in UAE");
      setLink("commercial");
    } else {
      setTitle("New Projects in UAE"); // Fallback or other titles based on pathname
      setLink("new-projects");
    }
  }, [location.pathname]);

  const options = [
    { id: 1, text: "Featured" },
    { id: 2, text: "Newest First" },
    { id: 3, text: "Price Low to High" },
    { id: 4, text: "Price High to Low" },
  ];

  const toggleMenu = () => {
    setSortShow(!sortShow);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option.text);
    setSortShow(false);
  };

  document.body.style.overflow = filterShow ? "hidden" : "auto";
  const products = [
    {
      id: 1,
      name: "Marian View",
      price: "1,60,000",
      image: house1,
    },
    {
      id: 2,
      name: "B-Town Buildings",
      price: "1,60,000",
      image: house2,
    },
    {
      id: 3,
      name: "Marina Views",
      price: "1,60,000",
      image: house3,
    },
    {
      id: 4,
      name: "Marina Views",
      price: "1,60,000",
      image: house4,
    },
    {
      id: 5,
      name: "Marina Views",
      price: "1,60,000",
      image: house1,
    },
    {
      id: 6,
      name: "Marina Views",
      price: "1,60,000",
      image: house2,
    },
  ];
  return (
    <div className="border-t-[1.6px] border-[#B4B4B4] shopPage mb-6 relative">
      <div className="">
        {/* header */}
        <div className="bg-white">
          <div className="container mx-auto">
            <div className="flex flex-wrap lg:flex-nowrap pt-[26px] pb-[18px] gap-2 md:gap-4 items-center justify-between relative">
              <div className="w-full lg:w-[30%] xl:w-[30%] order-2 lg:order-1">
                <h4 className="text-[22px] lg:text-[28px] md:text-[38px] font-medium lg:mb-4 text-text1 xs:leading-10 capitalize">
                  {title}
                </h4>
                <p className="text-base text-text2 hidden lg:block">
                  328 results found
                </p>
              </div>
              <div className="w-full lg:w-1/2  xl:w-[42%] order-1  lg:order-2 relative ">
                <div className="py-1.5 pl-3 md:pl-6 pr-2 md:pr-3 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex">
                  <input
                    type="text"
                    className="inline-block w-full border-none ring-0 focus:ring-0 text-text2 text-sm xs:text-base md:text-lg font-normal px-0 py-0 leading-4 md:leading-8 pr-4 placeholder:text-text2"
                    placeholder="Search City, community or building"
                  />
                  <span className="min-w-8 min-h-8 rounded-full flex items-center justify-center bg-primary ">
                    <img src={searchIcon} alt="" className=" w-3 md:w-[15px]" />
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-fit xl:w-[28%] order-3 flex items-center justify-between lg:block relative sm:static">
                <p className="text-sm sm:text-base text-text2 block lg:hidden">
                  328 results found
                </p>
                <div
                  className="py-1.5 px-3 md:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary hidden xl:flex justify-between items-center cursor-pointer"
                  onClick={toggleMenu}
                >
                  <div
                    className={`select-menu flex text-text2 text-sm xs:text-base md:text-lg font-normal leading-4 md:leading-8 ${
                      sortShow ? "active" : ""
                    }`}
                  >
                    <label className="text-[#8B8B8B]">Short By : </label>
                    <div className="select-btn">
                      <span className="sBtn-text">&nbsp; {selectedOption}</span>
                    </div>
                    {sortShow && (
                      <div className="w-full md:w-[84%] left-1/2 top-full absolute z-[20] mt-2.5 -translate-x-1/2">
                        <ul className="options">
                          {options.map((option, index) => (
                            <li
                              key={index}
                              className=" flex cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1 sm:py-1.5"
                              onClick={() => handleOptionClick(option)}
                            >
                              <span className="text-sm sm:text-lg">
                                {option.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  {sortShow ? (
                    <span>
                      <KeyboardArrowUpOutlined />
                    </span>
                  ) : (
                    <span>
                      <KeyboardArrowDownOutlined />
                    </span>
                  )}
                </div>
                <div className="flex xl:hidden gap-2">
                  <div>
                    <button
                      className={`flex items-center justify-center rounded-lg gap-1 border border-border1 py-1 px-3 lg:py-2.5 lg:px-5 text-text2 text-sm xs:text-base md:text-lg xl:text-[22px] font-normal leading-4 md:leading-8 ${
                        sortShow ? "bg-slate-100" : ""
                      }`}
                      onClick={toggleMenu}
                    >
                      <svg
                        className="W-6 h-6 button-module_button__icon--prefix__dBABA"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.011 15.4616V5.74829C15.011 5.33502 15.3471 5 15.7618 5C16.1764 5 16.5126 5.33502 16.5126 5.74829V15.4452L18.7183 13.247C19.0115 12.9548 19.4869 12.9548 19.7801 13.247C20.0733 13.5392 20.0733 14.013 19.7801 14.3052L16.2927 17.7808C16.144 17.929 15.9474 18.0149 15.7618 18.0149C15.5669 18.017 15.3631 17.929 15.2144 17.7808L11.727 14.3052C11.4338 14.013 11.4338 13.5392 11.727 13.247C12.0202 12.9548 12.4956 12.9548 12.7889 13.247L15.011 15.4616ZM8.98904 7.55339V17.2667C8.98904 17.6799 8.65289 18.015 8.23822 18.015C7.82355 18.015 7.4874 17.6799 7.4874 17.2667V7.56977L5.28173 9.76799C4.98852 10.0602 4.51312 10.0602 4.21991 9.76799C3.9267 9.47576 3.9267 9.00197 4.21991 8.70975L7.70731 5.23413C7.85601 5.08593 8.05264 5.00004 8.23822 5.00004C8.4331 4.99792 8.63687 5.08593 8.78557 5.23413L12.273 8.70975C12.5662 9.00197 12.5662 9.47576 12.273 9.76799C11.9798 10.0602 11.5044 10.0602 11.2111 9.76799L8.98904 7.55339Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Sort
                    </button>
                    <div
                      className={`select-menu flex  ${
                        sortShow ? "active" : ""
                      }`}
                    >
                      {sortShow && (
                        <div className="w-fit xl:w-[84%] right-12 sm:right-8 md:right-[100px] lg:right-0 xl:right-auto xl:left-1/2 top-full absolute z-[20] mt-2 sm:-mt-2  lg:-mt-6 xl:mt-2.5 xl:-translate-x-1/2">
                          <ul className="options !p-0 rounded-lg overflow-hidden">
                            {options.map((option, index) => (
                              <li
                                key={index}
                                className=" flex cursor-pointer items-center justify-between gap-5 bg-white hover:bg-[#f2f2f2] border-b px-5 lg:px-6 py-2.5 lg:py-3.5"
                                onClick={() => handleOptionClick(option)}
                              >
                                <span className="text-sm sm:text-lg lg:text-xl">
                                  {option.text}
                                </span>
                                <span
                                  className={`w-4 lg:w-5 h-4 lg:h-5 rounded-full border-2 flex items-center justify-center ${
                                    selectedOption === option.text
                                      ? "border-primary"
                                      : "border-border1"
                                  } `}
                                >
                                  <span
                                    className={`w-2.5 lg:w-[11px] h-2.5 lg:h-[11px] rounded-full inline-block ${
                                      selectedOption === option.text
                                        ? "bg-primary"
                                        : ""
                                    }`}
                                  ></span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="lg:hidden">
                    <button
                      className={`flex items-center justify-center rounded-lg gap-1 border border-border1 py-1 px-3 lg:py-2.5 lg:px-5 text-text2 text-sm xs:text-base md:text-lg xl:text-[22px] font-normal leading-4 md:leading-8 ${
                        filterShow && "bg-slate-100"
                      }`}
                      onClick={() => setFilterShow(true)}
                    >
                      <FilterAltOutlined /> Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop Filter & Product Section */}
        <div className="lg:bg-white relative">
          <div className="container px-0 mx-auto">
            <div className="lg:flex">
              <div className="lg:w-[20%] bg-white hidden lg:block">
                <Filter />
              </div>
              <div className="lg:w-[60%] context-box overflow-hidden bg-[#ECECEC] px-0 lg:px-6 pt-5 xl:pl-6 pb-24">
                <div className="grid sm:grid-cols-2 relative z-10 gap-6 sm:gap-y-4 gap-x-3 md:gap-6 xs:px-10 sm:px-0">
                  {link === "new-projects" ? (
                    <NewProjectCard products={products} />
                  ) : (
                    <ProductCard products={products} link={link} />
                  )}
                </div>
              </div>
              <div className="w-[20%] relative z-10 lg:pt-6">
                <div className="hidden lg:block shadow-md">
                  <img src={adImg} alt="" className="rounded w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Filter */}
        <div>
          <div
            className={`mobileFilter fixed w-full h-[80vh] bottom-0 bg-white z-[9999] shadow-[0_0_20px_10px_#00000017] overflow-auto pt-5 rounded-t-3xl ${
              filterShow && "filter_show"
            }`}
          >
            <div className="container mx-auto">
              <div className="relative px-3 ">
                <div className="flex items-center justify-between border-b pb-2">
                  <p className="text-lg font-medium text-[#040404]">
                    Filter Place
                  </p>
                  <div className="flex items-end gap-3">
                    <button className="text-sm text-[#8B8B8B] underline">
                      Clear all
                    </button>
                    <span className="" onClick={() => setFilterShow(false)}>
                      <CloseOutlined className="!text-xl" />
                    </span>
                  </div>
                </div>
                <div className="">
                  <Filter />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`filter_overlay bg-black fixed top-0 bottom-0 left-0 right-0 bg-#000 opacity-30 z-[999] ${
              filterShow ? "" : "opacity-0 invisible"
            }`}
            onClick={() => setFilterShow(false)}
          ></div>
        </div>
        <div className="fixed md:bottom-10 lg:right-10 bottom-5 right-1/2 translate-x-1/2 lg:translate-x-0 z-20 text-sm text-white duration-300 rounded overflow-hidden shadow-lg flex">
          <button
            className=" bg-primary bg-opacity-80 hover:bg-opacity-100 py-2 flex items-center gap-1 "
            onClick={() => setOpenAlert(true)}
          >
            <span className="px-2 border-r border-white">
              <NotificationsNoneOutlined className="!text-lg" /> Create Alert
            </span>
          </button>
          <Link
            to="/map-search"
            className=" bg-primary bg-opacity-80 hover:bg-opacity-100 py-2 flex items-center gap-1"
          >
            <span className="px-2">
              <PlaceOutlined className="!text-lg" /> Map View
            </span>
          </Link>
        </div>
      </div>
      <CreateAlert setOpenAlert={setOpenAlert} openAlert={openAlert} />
    </div>
  );
};

export default Shop;
