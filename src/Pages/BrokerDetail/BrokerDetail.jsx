import React, { useEffect, useRef, useState } from "react";
import agent1 from "../../assets/images/agent1.png";
import comp1 from "../../assets/images/comp1.png";
import phone from "../../assets/icons/phone.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import email from "../../assets/icons/email.png";
import shareIcon from "../../assets/icons/shareIcon.png";
import location_pinIcon from "../../assets/icons/location_pinIcon.png";
import { Link } from "react-router-dom";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import ProductCard from "../../Components/ProductCard/ProductCard";
import house1 from "../../assets/images/house1.png";
import house2 from "../../assets/images/house2.png";
import house3 from "../../assets/images/house3.png";
import house4 from "../../assets/images/house4.png";
import CompanyCard from "../../Components/CompanyCard/CompanyCard";

const BrokerDetail = () => {
  const [isActive, setIsActive] = useState("properties");
  const [optionShow, setOptionShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Buy");
  const toggleoption = () => {
    setOptionShow(!optionShow);
  };
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
    <div className="pt-6 pb-12">
      <div className="container mx-auto">
        <button className="mb-6 text-text2 text-xl font-medium flex items-center">
          <KeyboardArrowLeftOutlined className="!text-2xl" /> Back
        </button>
        <div className="brokerInfo">
          <div className=" bg-primary py-5 md:py-10 xl:py-0 xl:pl-10 xl:pr-7 px-4 md:px-7 rounded-xl sm:rounded-2xl md:rounded-[30px] relative">
            <div className="xl:flex justify-between">
              <div className=" md:flex items-start md:items-center xl:py-10">
                <div className="mx-auto w-60 md:w-72 rounded-xl md:rounded-[20px] overflow-hidden">
                  <img src={comp1} alt="" className=" w-full" />
                </div>
                <div className="md:pl-8 mt-5 md:mt-0 sm:md-0">
                  <p className="min-h-6 mb-3.5 flex justify-center gap-3 text-center md:text-left md:block">
                    <div className="self-center">
                      <span className="text-[13px] text-primary bg-white px-2.5 py-1 rounded-full">
                        18 Super agent
                      </span>
                    </div>
                    <button className="md:hidden xs:w-9 h-9 rounded-full md:border border-white flex items-center justify-center">
                      <img src={shareIcon} alt="" className="w-4" />
                    </button>
                  </p>
                  <h5 className="text-2xl md:text-3xl font-medium text-white mb-5 leading-5 w-full overflow-hidden text-nowrap text-ellipsis text-center md:text-left">
                    AGCO PROPERTIES
                  </h5>
                  <div className="mb-5 md:mb-8">
                    <p
                      className="text-base mb-2
               flex items-center gap-1.5 text-white "
                    >
                      <span className="min-w-[80px] md:min-w-[100px] text-[#ECECEC]">
                        ORN:
                      </span>{" "}
                      <span className="font-medium">26074</span>
                    </p>
                    <p
                      className="text-base
               flex sm:items-start gap-1.5 text-white "
                    >
                      <span className="min-w-[80px] md:min-w-[100px] text-[#ECECEC]">
                        Address:
                      </span>{" "}
                      <span className="font-medium text-left">
                        Office 707, Building Smart Heights, Barsha, Dubai, PO
                        Box.
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-sm text-white border-[1.8px] border-white rounded-full px-5 py-1 h-[35px] flex items-center justify-center">
                      Active Listing: <span>872</span>
                    </div>
                    <div className="text-sm text-white border-[1.8px] border-white rounded-full px-5 py-1 h-[35px] flex items-center justify-center">
                      Agent: <span>12</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:pb-10 pt-6 flex flex-col justify-between md:pl-5">
                <div className="hidden md:flex gap-3 justify-end absolute xl:static top-2 2xs:top-4 md:top-7 right-2 2xs:right-4 md:right-7 ">
                  <button className="xs:w-9 h-9 rounded-full xs:border border-white flex items-center justify-center">
                    <img src={shareIcon} alt="" className="w-4" />
                  </button>
                </div>
                <div className="flex xl:block flex-col xs:flex-row gap-2 sm:gap-4">
                  <button className="flex items-center justify-center xl:mb-[18px] lg:min-w-[270px] w-full text-sm xs:text-base sm:text-lg text-primary text-center bg-white py-2.5 pl-2 pr-3 xs:px-6 rounded-lg xs:font-medium tracking-wider lg:rounded-full">
                    <img
                      src={phone}
                      alt=""
                      className="w-4 sm:w-5 mr-1 xs:mr-3 imgColor"
                    />
                    Call Company
                  </button>
                  <button className="flex items-center justify-center lg:min-w-[270px] w-full text-sm xs:text-base sm:text-lg text-white text-center bg-[#0D3DB7] py-2.5 pl-2 pr-3 xs:px-[50] rounded-lg xs:font-medium tracking-wider lg:rounded-full">
                    <img
                      src={email}
                      alt=""
                      className="w-4 sm:w-5 mr-1 xs:mr-3"
                    />
                    Email Company
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <div className="discription mb-8 sm:mb-16">
            <p className="text-2xl font-medium text-[#040404] mb-4">
              About AGCO PROPERTIES
            </p>
            <p className=" text-text2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. 
            </p>
          </div>
          <div className="myProperties mb-8 sm:mb-10">
            <div className=" mb-8 sm:mb-10">
              <ul className="flex border-b-[1.8px] border-[#B4B4B4] w-fit">
                <li
                  className={`px-10 sm:px-16 pb-2 after:absolute after:left-0 after:right-0 relative after:-bottom-0.5 after:w-full after:h-[3px] after:hover:bg-primary cursor-pointer duration-300  hover:text-[#040404] ${
                    isActive === "properties"
                      ? "after:bg-primary text-[#040404]"
                      : "text-text2"
                  }`}
                  onClick={() => setIsActive("properties")}
                >
                  Properties
                </li>
                <li
                  className={`px-10 sm:px-16 pb-2 after:absolute after:left-0 after:right-0 relative after:-bottom-0.5 after:w-full after:h-[3px] after:hover:bg-primary cursor-pointer duration-300  hover:text-[#040404] ${
                    isActive === "agents"
                      ? "after:bg-primary text-[#040404]"
                      : "text-text2"
                  }`}
                  onClick={() => setIsActive("agents")}
                >
                  Agents
                </li>
              </ul>
            </div>
            {isActive === "properties" && (
              <div
                className="my-3 md:my-0 py-1.5 px-3 lg:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer w-fit min-w-[150px]"
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
                    <div className="w-full lg:w-[84%] left-1/2 top-full absolute z-[1] mt-2.5 -translate-x-1/2">
                      <ul className="options">
                        <li
                          className=" md:text-lg flex cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5"
                          onClick={() => setSelectedOption("Buy")}
                        >
                          <span className="text-base md:text-lg">Buy</span>
                        </li>
                        <li
                          className=" md:text-lg flex cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5"
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
            )}
            {isActive === "properties" ? (
              <p className=" mt-8 text-text2">131 Properties</p>
            ) : (
              <p className=" mt-8 text-text2">27 Agents, 18 SuperAgents</p>
            )}
            {isActive === "properties" ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 mt-8">
                <ProductCard products={products} />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-5 md:gap-8 mt-8">
                <CompanyCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerDetail;
