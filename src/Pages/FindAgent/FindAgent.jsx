import React, { useEffect, useRef, useState } from "react";
import bannerImg from "../../assets/images/findCompany.png";
import searchIcon from "../../assets/icons/searchIcon.png";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import AgentCard from "../../Components/AgentCard/AgentCard";
import { Link } from "react-router-dom";

const FindAgent = () => {
  const [serviceShow, setServiceShow] = useState(false);
  const [languageShow, setLanguageShow] = useState(false);
  const [nationalityShow, setNationalityShow] = useState(false);
  const [selectedServiceOption, setSelectedServiceOption] =
    useState("Service Needed");
  const [selectedLanguage, setSelectedLanguage] = useState("Language");
  const [selectedNationality, setSelectedNationality] = useState("Nationality");

  const serviceRef = useRef();
  const languageRef = useRef();
  const nationalityRef = useRef();

  const seviceOptions = [
    { id: 1, text: "Service Needed" },
    { id: 2, text: "Residential for sale" },
    { id: 3, text: "Residential for rent" },
    { id: 4, text: "Commercial for sale" },
    { id: 5, text: "Commercial for rent" },
  ];
  const langOption = [
    { id: 1, lang: "Language" },
    { id: 2, lang: "English" },
    { id: 3, lang: "French" },
    { id: 4, lang: "Hindi" },
    { id: 5, lang: "Spanish" },
  ];
  const nationalityOption = [
    { id: 1, nationality: "Nationality" },
    { id: 2, nationality: "Australia" },
    { id: 3, nationality: "Austria" },
    { id: 4, nationality: "Bahrain" },
    { id: 5, nationality: "Bangladesh" },
    { id: 6, nationality: "Belarus" },
    { id: 7, nationality: "Canada" },
    { id: 8, nationality: "Chile" },
    { id: 9, nationality: "China" },
    { id: 10, nationality: "Denmark" },
    { id: 11, nationality: "Egypt" },
    { id: 12, nationality: "Fiji" },
    { id: 13, nationality: "Finland" },
    { id: 14, nationality: "India" },
    { id: 15, nationality: "Iran" },
    { id: 16, nationality: "Italy" },
    { id: 17, nationality: "Israel" },
    { id: 18, nationality: "UAE" },
    { id: 19, nationality: "UK" },
    { id: 20, nationality: "USA" },
  ];

  const toggleServieMenu = () => {
    setServiceShow(!serviceShow);
  };
  const toggleLangMenu = () => {
    setLanguageShow(!languageShow);
  };
  const toggleNationality = () => {
    setNationalityShow(!nationalityShow);
  };

  const handleOptionClick = (option) => {
    setSelectedServiceOption(option.text);
    setServiceShow(false);
  };

  const handleLangClick = (option) => {
    setSelectedLanguage(option.lang);
    setLanguageShow(false);
  };

  const handleNationalityClick = (option) => {
    setSelectedNationality(option.nationality);
    setNationalityShow(false);
  };

  const handleClickOutside = (event) => {
    if (serviceRef.current && !serviceRef.current.contains(event.target)) {
      setServiceShow(false);
    }
    if (languageRef.current && !languageRef.current.contains(event.target)) {
      setLanguageShow(false);
    }
    if (
      nationalityRef.current &&
      !nationalityRef.current.contains(event.target)
    ) {
      setNationalityShow(false);
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
                  Find your agent to
                </span>
                <span className="text-[34px] 2xs:text-[44px] xs:text-5xl sm:text-[60px] md:text-[80px] lg:text-[100px]  text-white leading-10 xs:leading-[60px] sm:leading-[80px] md:leading-[110px] lg:leading-[120px]">
                  Find a home
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="relative z-0 mt-[-60px] sm:mt-[-66px] md:-mt-[83px] seachTab">
          <div className="container mx-auto">
            <div className="p-3 sm:p-4 lg:px-7 lg:py-3 xl:py-5 bg-white rounded-xl lg:rounded-[38px]  mx-auto">
              <div className="">
                <div className="flex flex-wrap xl:flex-nowrap lg:w-full gap-1.5 xs:gap-2 xl:gap-4 mb-5">
                  <Link
                    to="/find-agent"
                    className="py-2 text-nowrap px-5 sm:px-8 rounded-xl sm:rounded-3xl md:rounded-full bg-primary border border-primary text-white text-base md:text-lg font-medium"
                  >
                    Agent
                  </Link>
                  <Link
                    to="/find-broker"
                    className="py-2 text-nowrap px-5 sm:px-8 rounded-xl sm:rounded-3xl md:rounded-full border border-border1 hover:border-primary text-text2 hover:text-primary text-base md:text-lg font-normal"
                  >
                    Companies
                  </Link>
                </div>
                <div className="sm:flex flex-wrap lg:flex-nowrap items-center justify-between lg:justify-start gap-2 gap-y-2 lg:gap-[15px]">
                  <div className="py-[7px] md:py-1.5 pl-4 md:pl-2 pr-3 rounded-full border border-border1 hover:border-primary relative hover:text-primary sm:w-[83%] lg:w-full">
                    <input
                      type="text"
                      className="w-full border-none ring-0 focus:ring-0 text-text2 text-base md:text-lg font-normal px-0 py-0 pl-6 md:pl-10 leading-4 md:leading-8 placeholder:text-text2"
                      placeholder="Search"
                    />
                    <span className=" absolute left-4 top-1/2 -translate-y-1/2 z-0 inline-block ">
                      <img
                        src={searchIcon}
                        alt=""
                        className=" w-4 md:w-5 brightness-0"
                      />
                    </span>
                  </div>
                  <div className="my-3 md:my-0 py-1.5 px-3 lg:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer sm:w-[32%] lg:w-[18%] lg:min-w-[200px] order-3 lg:order-2"
                    onClick={toggleServieMenu}
                    ref={serviceRef}
                  >
                    <div
                      className={`select-menu flex text-text2 text-base md:text-lg font-normal leading-4 md:leading-8 ${
                        serviceShow ? "active" : ""
                      }`}
                    >
                      <div className="select-btn">
                        <p className="sBtn-text text-nowrap text-ellipsis overflow-hidden sm:w-[112px] md:w-[134px]">
                          {selectedServiceOption}
                        </p>
                      </div>
                      {serviceShow && (
                        <div className="w-full lg:w-fit left-1/2 top-full absolute z-[1] mt-2.5 -translate-x-1/2">
                          <ul className="options w-fit">
                            {seviceOptions.map((option, index) => (
                              <li
                                key={index}
                                className={`flex cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-1 ${option.text === selectedServiceOption && "bg-[#f2f2f2]"}`}
                                onClick={() => handleOptionClick(option)}
                              >
                                <span className="text-base text-nowrap">
                                  {option.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <span className={`${serviceShow ? "" : "rotate-[180deg]"}`}>
                      <KeyboardArrowUpOutlined />
                    </span>
                  </div>
                  <div className="my-3 md:my-0 py-1.5 px-3 lg:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer sm:w-[32%] lg:w-[18%] lg:min-w-[180px] order-4 lg:order-3"
                    onClick={toggleLangMenu}
                    ref={languageRef}
                  >
                    <div
                      className={`select-menu flex text-text2 text-base md:text-lg font-normal leading-4 md:leading-8 ${
                        languageShow ? "active" : ""
                      }`}
                    >
                      <div className="select-btn">
                        <span className="sBtn-text">{selectedLanguage}</span>
                      </div>
                      {languageShow && (
                        <div className="w-full lg:w-fit left-1/2 top-full absolute z-[1] mt-2.5 -translate-x-1/2">
                          <ul className="options w-fit">
                            {langOption.map((option, index) => (
                              <li
                                key={index}
                                className={`flex cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-1 ${selectedLanguage === option.lang && "bg-[#f2f2f2]"}`}
                                onClick={() => handleLangClick(option)}
                              >
                                <span className="text-base md:text-lg text-nowrap">
                                  {option.lang}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <span
                      className={`${languageShow ? "" : "rotate-[180deg]"}`}
                    >
                      <KeyboardArrowUpOutlined />
                    </span>
                  </div>
                  <div className="my-3 md:my-0 py-1.5 px-3 lg:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer sm:w-[32%] lg:w-[18%] lg:min-w-[180px] order-5 lg:order-4"
                    onClick={toggleNationality}
                    ref={nationalityRef}
                  >
                    <div
                      className={`select-menu flex text-text2 text-base md:text-lg font-normal leading-4 md:leading-8 ${
                        nationalityShow ? "active" : ""
                      }`}
                    >
                      <div className="select-btn">
                        <span className="sBtn-text">{selectedNationality}</span>
                      </div>
                      {nationalityShow && (
                        <div className="w-full lg:w-fit left-1/2 top-full absolute z-[1] mt-2.5 -translate-x-1/2">
                          <ul className="options w-fit">
                            {nationalityOption.map((option, index) => (
                              <li
                                key={index}
                                className={`flex cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5 mb-1 ${option.nationality === selectedNationality && "bg-[#f2f2f2]"}`}
                                onClick={() => handleNationalityClick(option)}
                              >
                                <span className="text-base md:text-lg text-nowrap">
                                  {option.nationality}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <span
                      className={`${nationalityShow ? "" : "rotate-[180deg]"}`}
                    >
                      <KeyboardArrowUpOutlined />
                    </span>
                  </div>
                  <button className="w-full sm:w-[15%] lg:min-w-[45px] lg:w-[45px] h-10 md:h-[45px] rounded-full flex items-center justify-center bg-primary order-2 lg:order-5">
                    <img
                      src={searchIcon}
                      alt=""
                      className=" w-3 md:w-5 hidden lg:inline-block"
                    />
                    <span className="md:text-lg tracking-wider text-white font-medium inline-block lg:hidden">
                      Search
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-2 gap-5 md:gap-8 mb-8 md:mb-12">
            <AgentCard />
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

export default FindAgent;
