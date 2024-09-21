import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import map_img from "../../assets/images/map_img.png";

const ExplorePriceMap = () => {
  const [optionShow, setOptionShow] = useState(false);
  const [optionShow2, setOptionShow2] = useState(false);
  const [optionShow3, setOptionShow3] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Buy");
  const [selectedOption2, setSelectedOption2] = useState("Apartment");
  const [selectedOption3, setSelectedOption3] = useState("1");
  const toggleoption = () => {
    setOptionShow(!optionShow);
  };
  const toggleoption2 = () => {
    setOptionShow2(!optionShow2);
  };
  const toggleoption3 = () => {
    setOptionShow3(!optionShow3);
  };
  return (
    <div className="pt-6 pb-12 productDetail">
      <div className="container mx-auto">
        <div className="">
          <div className=" flex items-center justify-center gap-3">
            <div
              className="my-3 md:my-0 py-1.5 px-3 lg:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer w-fit min-w-[120px]"
              onClick={toggleoption}
            >
              <div
                className={`select-menu flex text-text2 text-base md:text-lg font-normal leading-4 md:leading-8 ${
                  optionShow ? "active" : ""
                }`}
              >
                <div className="select-btn">
                  <span className="sBtn-text">{selectedOption}</span>
                </div>
                {optionShow && (
                  <div className="w-full    left-1/2 top-full absolute z-[1] mt-2.5 -translate-x-1/2">
                    <ul className="options">
                      <li
                        className={`md:text-lg flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-0.5 ${
                          selectedOption === "Buy" ? "bg-[#f2f2f2]" : "bg-white"
                        }`}
                        onClick={() => setSelectedOption("Buy")}
                      >
                        <span className="text-base md:text-lg">Buy</span>
                      </li>
                      <li
                        className={`md:text-lg flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-0.5 ${
                          selectedOption === "Rent"
                            ? "bg-[#f2f2f2]"
                            : "bg-white"
                        }`}
                        onClick={() => setSelectedOption("Rent")}
                      >
                        <span className="text-base md:text-lg">Rent</span>
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
              className="my-3 md:my-0 py-1.5 px-3 lg:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer w-fit min-w-[120px]"
              onClick={toggleoption2}
            >
              <div
                className={`select-menu flex text-text2 text-base md:text-lg font-normal leading-4 md:leading-8 ${
                  optionShow2 ? "active" : ""
                }`}
              >
                <div className="select-btn">
                  <span className="sBtn-text">{selectedOption2}</span>
                </div>
                {optionShow2 && (
                  <div className="w-fit left-1/2 top-full absolute z-[1] mt-2.5 -translate-x-1/2 ">
                    <ul className="options w-fit">
                      <li
                        className={`md:text-lg flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-0.5 ${
                          selectedOption2 === "Apartment"
                            ? "bg-[#f2f2f2]"
                            : "bg-white"
                        }`}
                        onClick={() => setSelectedOption2("Apartment")}
                      >
                        <span className="text-base md:text-lg">Apartment</span>
                      </li>
                      <li
                        className={`md:text-lg flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-0.5 ${
                          selectedOption2 === "Villa/Townhouse"
                            ? "bg-[#f2f2f2]"
                            : "bg-white"
                        }`}
                        onClick={() => setSelectedOption2("Villa/Townhouse")}
                      >
                        <span className="text-base md:text-lg">
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
              className="my-3 md:my-0 py-1.5 px-3 lg:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer w-fit min-w-[120px]"
              onClick={toggleoption3}
            >
              <div
                className={`select-menu flex text-text2 text-base md:text-lg font-normal leading-4 md:leading-8 ${
                  optionShow3 ? "active" : ""
                }`}
              >
                <div className="select-btn">
                  <span className="sBtn-text">{selectedOption3} Bed</span>
                </div>
                {optionShow3 && (
                  <div className="w-fit right-0 md:left-1/2 top-full absolute z-[1] mt-2.5 md:-translate-x-1/2 ">
                    <ul className="options w-fit !flex gap-1">
                      <li
                        className={`md:text-sm flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 py-1.5 mb-0.5 ${
                          selectedOption3 === "1" ? "bg-[#f2f2f2]" : "bg-white"
                        }`}
                        onClick={() => setSelectedOption3("1")}
                      >
                        <span className="text-base md:text-sm">1</span>
                      </li>
                      <li
                        className={`md:text-sm flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 py-1.5 mb-0.5 ${
                          selectedOption3 === "2" ? "bg-[#f2f2f2]" : "bg-white"
                        }`}
                        onClick={() => setSelectedOption3("2")}
                      >
                        <span className="text-base md:text-sm">2</span>
                      </li>
                      <li
                        className={`md:text-sm flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 py-1.5 mb-0.5 ${
                          selectedOption3 === "3" ? "bg-[#f2f2f2]" : "bg-white"
                        }`}
                        onClick={() => setSelectedOption3("3")}
                      >
                        <span className="text-base md:text-sm">3</span>
                      </li>
                      <li
                        className={`md:text-sm flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 py-1.5 mb-0.5 ${
                          selectedOption3 === "4" ? "bg-[#f2f2f2]" : "bg-white"
                        }`}
                        onClick={() => setSelectedOption3("4")}
                      >
                        <span className="text-base md:text-sm">4</span>
                      </li>
                      <li
                        className={`md:text-sm flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 py-1.5 mb-0.5 ${
                          selectedOption3 === "5" ? "bg-[#f2f2f2]" : "bg-white"
                        }`}
                        onClick={() => setSelectedOption3("5")}
                      >
                        <span className="text-base md:text-sm">5</span>
                      </li>
                      <li
                        className={`md:text-sm flex cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-lg px-3 py-1.5 mb-0.5 ${
                          selectedOption3 === "6" ? "bg-[#f2f2f2]" : "bg-white"
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

export default ExplorePriceMap;
