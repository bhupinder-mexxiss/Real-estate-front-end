import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import map_img from "../../assets/images/map_img.png";
import searchIcon from "../../assets/icons/searchIcon.png";

const MapSearch = () => {
  const [optionShow, setOptionShow] = useState(false);
  const [optionShow2, setOptionShow2] = useState(false);
  const [optionShow3, setOptionShow3] = useState(false);
  const [optionShow4, setOptionShow4] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Buy");
  const [selectedOption2, setSelectedOption2] = useState("Property Type");
  const [selectedOption3, setSelectedOption3] = useState("Beds & Baths");
  const toggleoption = () => {
    setOptionShow(!optionShow);
  };
  const toggleoption2 = () => {
    setOptionShow2(!optionShow2);
  };
  const toggleoption3 = () => {
    setOptionShow3(!optionShow3);
  };
  const toggleoption4 = () => {
    setOptionShow4(!optionShow4);
  };
  return (
    <div className="pt-6 pb-12 productDetail">
      <div className="container mx-auto">
        <div className="">
          <div className="flex flex-wrap gap-3 xl:justify-center">
            <div className="w-full xl:basis-1/3 relative flex gap-3">
              <div className="py-1 md:py-1.5 pl-3 md:pl-6 pr-2 md:pr-3 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex w-full">
                <input
                  type="text"
                  className="inline-block w-full border-none ring-0 focus:ring-0 text-text2 text-sm xs:text-base lg:text-lg font-normal px-0 py-0 leading-4 md:leading-8 pr-4 placeholder:text-text2 bg-transparent"
                  placeholder="Search City, community or building"
                />
                <span className="min-w-8 min-h-8 rounded-full flex items-center justify-center bg-primary ">
                  <img src={searchIcon} alt="" className=" w-3 md:w-[15px]" />
                </span>
              </div>
              <button className="px-6 sm:px-8 md:px-10 text-center text-white bg-primary rounded-full xl:hidden">
                Find
              </button>
            </div>
            <div className=" flex items-center gap-3 order-3 xl:order-2 flex-wrap">
              <div
                className=" py-1.5 px-3 lg:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer w-fit max-w-[180px]"
                onClick={toggleoption}
              >
                <div
                  className={`select-menu flex text-text2 text-base lg:text-lg font-normal leading-4 md:leading-8 ${
                    optionShow ? "active" : ""
                  }`}
                >
                  <div className="select-btn">
                    <p className="sBtn-text text-nowrap max-w-[115px] overflow-hidden text-ellipsis">
                      {selectedOption}
                    </p>
                  </div>
                  {optionShow && (
                    <div className="w-fit left-1/2 top-full absolute z-[1] mt-2.5 -translate-x-1/2">
                      <ul className="options fit">
                        <li
                          className={`lg:text-lg flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-0.5 ${
                            selectedOption === "Buy"
                              ? "bg-[#f2f2f2]"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectedOption("Buy")}
                        >
                          <span className="text-base lg:text-lg text-nowrap">
                            Buy
                          </span>
                        </li>
                        <li
                          className={`lg:text-lg flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-0.5 ${
                            selectedOption === "Rent"
                              ? "bg-[#f2f2f2]"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectedOption("Rent")}
                        >
                          <span className="text-base lg:text-lg text-nowrap">
                            Rent
                          </span>
                        </li>
                        <li
                          className={`lg:text-lg flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-0.5 ${
                            selectedOption === "Commercial Rent"
                              ? "bg-[#f2f2f2]"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectedOption("Commercial Rent")}
                        >
                          <span className="text-base lg:text-lg text-nowrap">
                            Commercial Rent
                          </span>
                        </li>
                        <li
                          className={`lg:text-lg flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-0.5 ${
                            selectedOption === "Commercial Buy"
                              ? "bg-[#f2f2f2]"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectedOption("Commercial Buy")}
                        >
                          <span className="text-base lg:text-lg text-nowrap">
                            Commercial Buy
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <span className={`${optionShow ? "" : "rotate-[180deg]"}`}>
                  <KeyboardArrowUpOutlined />
                </span>
              </div>
              <div
                className=" py-1.5 px-3 lg:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer w-fit max-w-[180px]"
                onClick={toggleoption2}
              >
                <div
                  className={`select-menu flex text-text2 text-base lg:text-lg font-normal leading-4 md:leading-8 ${
                    optionShow2 ? "active" : ""
                  }`}
                >
                  <div className="select-btn">
                    <p className="sBtn-text text-nowrap max-w-[115px] overflow-hidden text-ellipsis">
                      {selectedOption2}
                    </p>
                  </div>
                  {optionShow2 && (
                    <div className="w-fit left-1/2 top-full absolute z-[1] mt-2.5 -translate-x-1/2 ">
                      <ul className="options w-fit">
                        <li
                          className={`lg:text-lg flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-0.5 ${
                            selectedOption2 === "Property Type"
                              ? "bg-[#f2f2f2]"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectedOption2("Property Type")}
                        >
                          <span className="text-base lg:text-lg">
                            Property Type
                          </span>
                        </li>
                        <li
                          className={`lg:text-lg flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-0.5 ${
                            selectedOption2 === "Apartment"
                              ? "bg-[#f2f2f2]"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectedOption2("Apartment")}
                        >
                          <span className="text-base lg:text-lg">
                            Apartment
                          </span>
                        </li>
                        <li
                          className={`lg:text-lg flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-0.5 ${
                            selectedOption2 === "Villa/Townhouse"
                              ? "bg-[#f2f2f2]"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectedOption2("Villa/Townhouse")}
                        >
                          <span className="text-base lg:text-lg">
                            Villa/Townhouse
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <span className={`${optionShow2 ? "" : "rotate-[180deg]"}`}>
                  <KeyboardArrowUpOutlined />
                </span>
              </div>
              <div
                className=" py-1.5 px-3 lg:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer w-fit max-w-[180px]"
                onClick={toggleoption3}
              >
                <div
                  className={`select-menu flex text-text2 text-base lg:text-lg font-normal leading-4 md:leading-8 ${
                    optionShow3 ? "active" : ""
                  }`}
                >
                  <div className="select-btn">
                    <p className="sBtn-text text-nowrap max-w-[115px] overflow-hidden text-ellipsis">
                      {selectedOption3}{" "}
                      {selectedOption3 !== "Beds & Baths" && "Bed"}
                    </p>
                  </div>
                  {optionShow3 && (
                    <div className="w-fit right-0 md:left-1/2 top-full absolute z-[1] mt-2.5 md:-translate-x-1/2 ">
                      <ul className="options w-fit !flex gap-1">
                        <li
                          className={`md:text-sm flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 py-1.5 mb-0.5 ${
                            selectedOption3 === "1"
                              ? "bg-[#f2f2f2]"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectedOption3("1")}
                        >
                          <span className="text-base md:text-sm">1</span>
                        </li>
                        <li
                          className={`md:text-sm flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 py-1.5 mb-0.5 ${
                            selectedOption3 === "2"
                              ? "bg-[#f2f2f2]"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectedOption3("2")}
                        >
                          <span className="text-base md:text-sm">2</span>
                        </li>
                        <li
                          className={`md:text-sm flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 py-1.5 mb-0.5 ${
                            selectedOption3 === "3"
                              ? "bg-[#f2f2f2]"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectedOption3("3")}
                        >
                          <span className="text-base md:text-sm">3</span>
                        </li>
                        <li
                          className={`md:text-sm flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 py-1.5 mb-0.5 ${
                            selectedOption3 === "4"
                              ? "bg-[#f2f2f2]"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectedOption3("4")}
                        >
                          <span className="text-base md:text-sm">4</span>
                        </li>
                        <li
                          className={`md:text-sm flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 py-1.5 mb-0.5 ${
                            selectedOption3 === "5"
                              ? "bg-[#f2f2f2]"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectedOption3("5")}
                        >
                          <span className="text-base md:text-sm">5</span>
                        </li>
                        <li
                          className={`md:text-sm flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 py-1.5 mb-0.5 ${
                            selectedOption3 === "6"
                              ? "bg-[#f2f2f2]"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectedOption3("6")}
                        >
                          <span className="text-base md:text-sm">6</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <span className={`${optionShow3 ? "" : "rotate-[180deg]"}`}>
                  <KeyboardArrowUpOutlined />
                </span>
              </div>
              <div
                className=" py-1.5 px-3 lg:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer w-fit max-w-[180px]"
                onClick={toggleoption4}
              >
                <div
                  className={`select-menu flex text-text2 text-base lg:text-lg font-normal leading-4 md:leading-8 ${
                    optionShow4 ? "active" : ""
                  }`}
                >
                  <div className="select-btn">
                    <p className="sBtn-text text-nowrap max-w-[115px] overflow-hidden text-ellipsis">
                      Price
                    </p>
                  </div>
                  {optionShow4 && (
                    <div
                      className="w-fit right-0 top-full absolute z-[1] mt-2.5 "
                      onClick={() => setOptionShow4(true)}
                    >
                      <div className="bg-white p-2 rounded-md w-fit">
                        <div className="flex items-center gap-2 ">
                          <div className="flex flex-col w-fit">
                            <input
                              type="number"
                              className="sm:max-w-60 border border-border1 rounded-full w-full inline-block px-4 py-1.5 text-text2 placeholder:text-text2 min-w-32"
                              placeholder="Min Price"
                            />
                          </div>
                          <span>-</span>
                          <div className="flex flex-col w-fit">
                            <input
                              type="number"
                              className="sm:max-w-60 border border-border1 rounded-full w-full inline-block px-4 py-1.5 text-text2 placeholder:text-text2 min-w-32"
                              placeholder="Max Price"
                            />
                          </div>
                        </div>
                        <div className="flex gap-5 mt-2">
                          <button className="py-1.5 px-3 w-full border text-sm border-primary bg-primary text-white rounded-lg">
                            Apply
                          </button>
                          <button className="py-1.5 px-3 w-full border text-sm border-primary text-primary rounded-lg">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <span className={`${optionShow4 ? "" : "rotate-[180deg]"}`}>
                  <KeyboardArrowUpOutlined />
                </span>
              </div>
            </div>
            <button className="px-10 text-center text-white bg-primary rounded-full hidden xl:inline-block">
              Find
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 border border-border1 relative">
        <Link
          to="/explore"
          className="text-text2 flex gap-1 items-center py-1.5 px-2 shadow-md bg-white w-fit rounded-md absolute left-4 top-5"
        >
          {" "}
          <KeyboardArrowLeftOutlined /> Exit Map
        </Link>
        <div>
          <img
            src={map_img}
            className="w-full max-h-[600px] object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MapSearch;
