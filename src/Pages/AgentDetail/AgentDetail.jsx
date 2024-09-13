import React, { useEffect, useRef, useState } from "react";
import agent1 from "../../assets/images/agent1.png";
import comp1 from "../../assets/images/comp1.png";
import phone from "../../assets/icons/phone.png";
import whatsapp from "../../assets/icons/whatsapp.png";
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

const AgentDetail = () => {
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
        <div className="agentInfo">
          <div className="lg:flex gap-6">
            <div className="lg:w-[70%] xl:w-4/5 bg-primary py-5 md:py-10 xl:py-0 xl:pl-10 xl:pr-7 px-4 md:px-7 rounded-xl sm:rounded-2xl md:rounded-[30px] relative">
              <div className="xl:flex justify-between">
                <div className=" sm:flex items-center xl:py-10">
                  <div className="mx-auto sm:mx-0 xl:mx-auto w-60 md:w-72 rounded-xl md:rounded-[20px] overflow-hidden">
                    <img src={agent1} alt="" className=" w-full" />
                  </div>
                  <div className="sm:pl-4 md:pl-8 text-center sm:text-left mt-5 sm:mt-0">
                    <p className="min-h-6 mb-3.5 flex justify-center sm:block gap-3">
                      <div className="self-center">
                        <span className="text-[13px] text-primary bg-white px-2.5 py-1 rounded-full">
                          Super agent
                        </span>
                      </div>
                      <button className="sm:hidden xs:w-9 h-9 rounded-full sm:border border-white flex items-center justify-center">
                        <img src={shareIcon} alt="" className="w-4" />
                      </button>
                    </p>
                    <h5 className="text-2xl md:text-3xl font-medium text-white mb-5 md:mb-8 leading-5 w-full overflow-hidden text-nowrap text-ellipsis">
                      Kristina Kimeridze
                    </h5>
                    <div className="mb-5 md:mb-8">
                      <p
                        className="text-base md:text-lg mb-2.5
               flex items-center gap-1.5 text-white "
                      >
                        <span className="min-w-[80px] md:min-w-[100px] text-[#ECECEC]">
                          Nationality:
                        </span>{" "}
                        <span className="font-medium">United State</span>
                      </p>
                      <p
                        className="text-base md:text-lg
               flex items-center gap-1.5 text-white "
                      >
                        <span className="min-w-[80px] md:min-w-[100px] text-[#ECECEC]">
                          Language:
                        </span>{" "}
                        <span className="font-medium">English</span>
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-sm text-white border-[1.8px] border-white rounded-full px-3 py-1 h-[35px] flex items-center justify-center">
                        For Sale: <span>12</span>
                      </div>
                      <div className="text-sm text-white border-[1.8px] border-white rounded-full px-3 py-1 h-[35px] flex items-center justify-center">
                        For Rent: <span>123</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:pb-10 pt-6 flex flex-col justify-between">
                  <div className="hidden sm:flex gap-3 justify-end absolute xl:static top-2 2xs:top-4 md:top-7 right-2 2xs:right-4 md:right-7 ">
                    <button className="xs:w-9 h-9 rounded-full xs:border border-white flex items-center justify-center">
                      <img src={shareIcon} alt="" className="w-4" />
                    </button>
                  </div>
                  <div className="flex xl:block gap-4">
                    <button className="flex items-center justify-center xl:mb-[18px] lg:min-w-[250px] w-full text-sm xs:text-base sm:text-lg text-primary text-center bg-white py-2.5 pl-2 pr-3 xs:px-6 rounded-lg xs:font-medium tracking-wider lg:rounded-full">
                      <img
                        src={phone}
                        alt=""
                        className="w-4 sm:w-5 mr-1 xs:mr-3 imgColor"
                      />
                      Call
                    </button>
                    <button className="flex items-center justify-center lg:min-w-[250px] w-full text-sm xs:text-base sm:text-lg text-white text-center bg-[#008E17] py-2.5 pl-2 pr-3 xs:px-6 rounded-lg xs:font-medium tracking-wider lg:rounded-full">
                      <img
                        src={whatsapp}
                        alt=""
                        className="w-4 sm:w-5 mr-1 xs:mr-3"
                      />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[30%] xl:w-1/5 border-2 mt-6 lg:mt-0 border-primary rounded-[30px] ">
              <div className="p-6 lg:px-5 lg:flex h-full justify-center flex-col">
                <p className="text-lg font-medium text-[#040404] lg:text-center ">
                  Brokerage
                </p>
                <div className="flex lg:block items-center gap-6 mt-5 lg:mt-0">
                  <div className="w-28 h-20 lg:mx-auto lg:mt-7 lg:mb-9 rounded-md overflow-hidden">
                    <img
                      src={comp1}
                      alt=""
                      className="w-full object-cover h-full"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-[#505152] mb-1 lg:mb-7">
                      Rosenhiem Luxury Properties
                    </p>
                    <Link className="text-primary text-lg font-medium border-b border-primary lg:mx-auto block w-fit">
                      About Company
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <div className="trackRecord mb-14">
            <p className="text-2xl font-medium text-[#040404]">Track Record</p>
            <div>
              <div className=" rounded-xl xl:rounded-full bg-white my-7 border-2 border-[#B4B4B4]">
                <div className="flex flex-wrap md:flex-nowrap justify-between gap-y-4 py-5 px-4 text-center">
                  <div className=" border-b xs:border-b-0 pb-3 xs:pb-0 w-full xs:w-1/2 md:w-fit flex flex-col xs:pr-5 lg:px-10 xl:px-16 xs:border-r border-border1">
                    <span className="text-text2 mb-1 sm:mb-2">
                      Closed Deals
                    </span>
                    <span className="text-lg md:text-xl font-medium text-[#040404]">
                      16
                    </span>
                  </div>
                  <div className="border-b xs:border-b-0 pb-3 xs:pb-0 w-full xs:w-1/2 md:w-fit flex flex-col xs:pl-6 md:px-6 lg:px-10 xl:px-16 md:border-r border-border1">
                    <span className="text-text2 mb-1 sm:mb-2">Deal Type</span>
                    <span className="text-base md:text-xl font-medium text-[#040404]">
                      9 Sale, 7 Rent
                    </span>
                  </div>
                  <div className="border-b xs:border-b-0 pb-3 xs:pb-0 w-full xs:w-1/2 md:w-fit flex flex-col xs:pr-6 md:px-6 lg:px-10 xl:px-16 xs:border-r border-border1">
                    <span className="text-text2 mb-1 sm:mb-2 px">
                      Rent, Total Deals Value
                    </span>
                    <span className="text-base md:text-xl font-medium text-[#040404]">
                      740K AED
                    </span>
                  </div>
                  <div className="w-full xs:w-1/2 md:w-fit flex flex-col xs:pl-6 lg:px-10 xl:px-16">
                    <span className="text-text2 mb-1 sm:mb-2 px">
                      Sale, Total Deals Value
                    </span>
                    <span className="text-base md:text-xl font-medium text-[#040404]">
                      15.3M AED
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative overflow-x-auto shadow-md rounded-[20px]">
                  <table class="w-full text-sm text-left">
                    <thead class="bg-primary text-white">
                      <tr>
                        <th className="text-base font-medium px-6 py-5 min-w-[180px]">
                          Location
                        </th>
                        <th className="text-base font-medium px-6 py-5 min-w-[130px]">
                          Deal Type
                        </th>
                        <th className="text-base font-medium px-6 py-5 min-w-[130px]">
                          Date
                        </th>
                        <th className="text-base font-medium px-6 py-5 min-w-[170px]">
                          Property Type
                        </th>
                        <th className="text-base font-medium px-6 py-5 min-w-[140px]">
                          Bed Room
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="odd:bg-white even:bg-[#F8F8FA] text-[#1B2E5A]">
                        <td class="px-6 py-4">
                          <div className="flex items-center mb-1">
                            <img
                              src={location_pinIcon}
                              alt=""
                              className="w-3 mr-1"
                            />{" "}
                            <span className="text-sm">Dubai Marina</span>
                          </div>
                          <span className="text-sm font-medium">MAG 218</span>
                        </td>
                        <td class="px-6 py-4">Sale</td>
                        <td class="px-6 py-4">07/01/2024</td>
                        <td class="px-6 py-4">Apartment</td>
                        <td class="px-6 py-4">2</td>
                      </tr>
                      <tr class="odd:bg-white even:bg-[#F8F8FA] text-[#1B2E5A]">
                        <td class="px-6 py-4">
                          <div className="flex items-center mb-1">
                            <img
                              src={location_pinIcon}
                              alt=""
                              className="w-3 mr-1"
                            />{" "}
                            <span className="text-sm">Dubai Marina</span>
                          </div>
                          <span className="text-sm font-medium">MAG 218</span>
                        </td>
                        <td class="px-6 py-4">Sale</td>
                        <td class="px-6 py-4">07/01/2024</td>
                        <td class="px-6 py-4">Apartment</td>
                        <td class="px-6 py-4">2</td>
                      </tr>
                      <tr class="odd:bg-white even:bg-[#F8F8FA] text-[#1B2E5A]">
                        <td class="px-6 py-4">
                          <div className="flex items-center mb-1">
                            <img
                              src={location_pinIcon}
                              alt=""
                              className="w-3 mr-1"
                            />{" "}
                            <span className="text-sm">Dubai Marina</span>
                          </div>
                          <span className="text-sm font-medium">MAG 218</span>
                        </td>
                        <td class="px-6 py-4">Sale</td>
                        <td class="px-6 py-4">07/01/2024</td>
                        <td class="px-6 py-4">Apartment</td>
                        <td class="px-6 py-4">2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="personalInfo mb-8 sm:mb-10">
            <p className="text-2xl font-medium text-[#040404] mb-7">
              Personal Information
            </p>
            <ul>
              <li className="flex mb-4">
                <span className="sm:text-lg text-text2 min-w-44 sm:min-w-52">
                  Specialization:
                </span>
                <span className="sm:text-lg sm text-[#040404] font-medium">
                  Senior Client Advisor
                </span>
              </li>
              <li className="flex mb-4">
                <span className="sm:text-lg text-text2 min-w-44 sm:min-w-52">
                  Experience Since:
                </span>
                <span className="sm:text-lg sm text-[#040404] font-medium">
                  2023
                </span>
              </li>
              <li className="flex mb-4">
                <span className="sm:text-lg text-text2 min-w-44 sm:min-w-52">
                  BRN#:
                </span>
                <span className="sm:text-lg sm text-[#040404] font-medium">
                  66916
                </span>
              </li>
              <li className="flex mb-4">
                <span className="sm:text-lg text-text2 min-w-44 sm:min-w-52">
                  Links:
                </span>
                <span className="sm:text-lg sm text-[#040404] font-medium border-b-2 border-black cursor-pointer">
                  LinkedIn
                </span>
              </li>
            </ul>
          </div>
          <div className="discription mb-8 sm:mb-10">
            <p className="text-2xl font-medium text-[#040404] mb-4">
              Description
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
            <p className="text-2xl font-medium text-[#040404] mb-7">
              My Properties
            </p>
            <div
              className="my-3 md:my-0 py-1.5 px-3 lg:px-5 rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer w-fit min-w-[130px]"
              onClick={toggleoption}
            >
              <div
                className={`select-menu flex text-text2 text-base md:text-lg font-normal leading-4 ${
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
                        className=" md:text-lg flex cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1"
                        onClick={() => setSelectedOption("Buy")}
                      >
                        <span className="text-base md:text-lg">Buy</span>
                      </li>
                      <li
                        className=" md:text-lg flex cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1"
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 mt-6">
              <ProductCard products={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;
