import React, { useEffect, useRef, useState } from "react";
import bannerImg from "../../assets/images/findCompany.png";
import searchIcon from "../../assets/icons/searchIcon.png";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import CompanyCard from "../../Components/CompanyCard/CompanyCard";
import { Link } from "react-router-dom";

const FindBroker = () => {
  const [sortShow, setSortShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Service Needed");
  const serviceRef = useRef();
  const options = [
    { id: 1, text: "Service Needed" },
    { id: 2, text: "Residential for sale" },
    { id: 3, text: "Residential for rent" },
    { id: 4, text: "Commercial for sale" },
    { id: 5, text: "Commercial for rent" },
  ];

  const toggleMenu = () => {
    setSortShow(!sortShow);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option.text);
    setSortShow(false);
  };
  const handleClickOutside = (event) => {
    if (serviceRef.current && !serviceRef.current.contains(event.target)) {
      setSortShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="pb-12">
      <div>
        <div
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundPosition: "center -40px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="pt-24 2xs:pt-28 pb-24 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32 lg:pt-[180px] lg:pb-[140px] banner relative"
        >
          <div className="container mx-auto relative z-0">
            <div className="">
              <h3 className=" flex flex-col">
                <span className="text-[#E2DAD7] text-[28px] 2xs:text-[34px] xs:text-4xl sm:text-[50px] md:text-[60px] 2xs:leading-[50px] md:leading-[70px] lg:leading-[90px]">
                  Find the best Real
                </span>
                <span className="text-[34px] 2xs:text-[44px] xs:text-5xl sm:text-[60px] md:text-[80px] lg:text-[100px]  text-white leading-10 xs:leading-[60px] sm:leading-[80px] md:leading-[110px] lg:leading-[120px]">
                  Estate Companies
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="relative z-0 mt-[-60px] sm:mt-[-66px] md:-mt-[83px] seachTab">
          <div className="container mx-auto">
            <div className="p-3 sm:p-5 lg:px-7 lg:py-3 xl:py-5 bg-white rounded-xl lg:rounded-[38px] max-w-[970px] mx-auto">
              <div className="">
                <div className="flex flex-wrap xl:flex-nowrap lg:w-full gap-1.5 xs:gap-2 xl:gap-4 mb-5">
                  <Link
                    to="/find-agent"
                    className="py-2 text-nowrap px-5 sm:px-8 rounded-xl sm:rounded-3xl md:rounded-full border border-border1 hover:border-primary text-text2 hover:text-primary text-base md:text-lg font-normal"
                  >
                    Agent
                  </Link>
                  <Link
                    to="/find-broker"
                    className="py-2 text-nowrap px-5 sm:px-8 rounded-xl sm:rounded-3xl md:rounded-full bg-primary border border-primary text-white text-base md:text-lg font-medium"
                  >
                    Companies
                  </Link>
                </div>
                <div className="sm:flex items-center gap-3 lg:gap-5">
                  <div className="py-[7px] md:py-1.5 pl-4 md:pl-2 pr-3 rounded-full border border-border1 hover:border-primary relative hover:text-primary w-full">
                    <input
                      type="text"
                      className="w-full border-none ring-0 focus:ring-0 text-text2 text-base md:text-lg font-normal px-0 py-0 pl-6 md:pl-10 leading-4 md:leading-8 placeholder:text-text2"
                      placeholder="Enter location or company name"
                    />
                    <span className=" absolute left-4 top-1/2 -translate-y-1/2 z-0 inline-block ">
                      <img
                        src={searchIcon}
                        alt=""
                        className=" w-4 md:w-5 brightness-0"
                      />
                    </span>
                  </div>
                  <div className="my-3 sm:my-0 py-1.5 px-3 lg:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer sm:w-[170px] lg:w-full md:min-w-[250px] lg:min-w-[300px]"
                    onClick={toggleMenu}
                    ref={serviceRef}
                  >
                    <div
                      className={`select-menu flex text-text2 text-base md:text-lg font-normal leading-4 md:leading-8 ${
                        sortShow ? "active" : ""
                      }`}
                    >
                      <div className="select-btn">
                        <p className="sBtn-text text-nowrap text-ellipsis overflow-hidden sm:w-[120px] md:w-full">
                          {selectedOption}
                        </p>
                      </div>
                      {sortShow && (
                        <div className="w-full sm:w-fit lg:w-[84%] left-1/2 top-full absolute z-[0] mt-2.5 -translate-x-1/2">
                          <ul className="options w-fit">
                            {options.map((option, index) => (
                              <li
                                key={index}
                                className={`flex cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 ${
                                  option.text === selectedOption &&
                                  "bg-[#f2f2f2]"
                                }`}
                                onClick={() => handleOptionClick(option)}
                              >
                                <p className="text-base md:text-lg text-nowrap">
                                  {option.text}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <span className={`${sortShow ? "" : "rotate-[180deg]"}`}>
                      <KeyboardArrowUpOutlined />
                    </span>
                  </div>
                  <button className="w-full sm:w-fit sm:min-w-[40px] md:min-w-[45px] h-[40px] md:h-[45px] rounded-full flex items-center justify-center bg-primary">
                    <img
                      src={searchIcon}
                      alt=""
                      className=" w-3 sm:w-4 md:w-5 hidden sm:inline-block"
                    />
                    <span className="text-xl tracking-wider text-white font-medium inline-block sm:hidden">
                      Find
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-14">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-5 md:gap-8 mb-8 md:mb-12">
            <CompanyCard />
          </div>
          <div className="text-center">
            <button className="border border-border1 rounded-full py-2.5 px-10 text-lg md:text-xl text-text2 inline-block hover:border-primary hover:bg-primary hover:text-white duration-300">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindBroker;
