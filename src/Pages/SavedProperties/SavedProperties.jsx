import React, { useEffect, useRef, useState } from "react";
import searchIcon from "../../assets/icons/searchIcon.png";
import { KeyboardArrowUpOutlined } from "@mui/icons-material";
import ProductCard from "../../Components/ProductCard/ProductCard";
import house1 from "../../assets/images/house1.png";
import house2 from "../../assets/images/house2.png";
import house3 from "../../assets/images/house3.png";
import house4 from "../../assets/images/house4.png";

const SavedProperties = () => {
  const [optionCatShow, setOptionCatShow] = useState(false);
  const [selectedCateOption, setSelectedCateOption] = useState("All");
  const [optionSortShow, setOptionSortShow] = useState(false);
  const [selectedSortOption, setSelectedSortOption] =
    useState("Recently Saved");
  const sortRef = useRef();
  const cateRef = useRef();

  const toggleSortoption = () => {
    setOptionSortShow(!optionSortShow);
  };
  const toggleCateoption = () => {
    setOptionCatShow(!optionCatShow);
  };
  const handleClickOutside = (event) => {
    if (sortRef.current && !sortRef.current.contains(event.target)) {
      setOptionSortShow(false);
    }
    if (cateRef.current && !cateRef.current.contains(event.target)) {
      setOptionCatShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
    <div className="py-8 sm:py-10">
      <div className="">
        <div className="container mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap gap-2 md:gap-4 items-end justify-between relative">
            <div className="w-full lg:w-[25%]">
              <h4 className="text-[22px] md:text-[28px] xl:text-3xl 2xl:text-[38px] font-medium lg:mb-4 text-text1 xs:leading-10 capitalize">
                Saved Properties
              </h4>
              <p className="text-base text-text2 hidden lg:block">
                328 results found
              </p>
            </div>
            <div className="w-full lg:w-[75%] flex justify-between lg:justify-end items-center gap-3 lg:gap-0">
              <p className="text-sm sm:text-base text-text2 lg:hidden">
                328 results found
              </p>
              <div className="flex justify-end gap-2 xs:gap-3 xl:gap-5">
                <button className=" text-sm sm:text-base xl:text-xl 2xl:text-xl text-primary py-1.5 md:py-1 xl:py-2.5 px-2 sm:px-4 xl:px-6 2xl:px-11 border border-primary rounded-lg lg:rounded-3xl xl:rounded-full">
                  Delete All
                </button>
                <div
                  className={`py-1.5 md:py-1 xl:py-2.5 px-2 sm:px-4 xl:px-5 rounded-lg lg:rounded-3xl xl:rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer w-fit ${
                    optionCatShow && "bg-[#00858e1a]"
                  } ${
                    selectedCateOption !== "All" &&
                    "bg-[#00858e1a] border-primary"
                  }`}
                  onClick={toggleCateoption}
                  ref={cateRef}
                >
                  <div
                    className={`lg:min-w-[230px] xl:min-w-[270px] select-menu flex text-text2  text-sm sm:text-base xl:text-xl 2xl:text-xl font-normal leading-4 md:leading-8 ${
                      optionCatShow ? "active" : ""
                    }`}
                  >
                    <div className="select-btn hidden lg:block">
                      <span className="text-gray-500">Category : </span>
                      <span className="sBtn-text text-text1">
                        {selectedCateOption}
                      </span>
                    </div>
                    <div className="flex items-center justify-center lg:hidden">
                      <svg
                        className="w-4 h-4 xs:W-6 xs:h-6 button-module_button__icon--prefix__dBABA"
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
                      Category
                    </div>
                    {optionCatShow && (
                      <div className="w-fit lg:w-[84%] left-1/2 top-full absolute z-[1] mt-2.5 -translate-x-1/2">
                        <ul className="options">
                          <li
                            className=" lg:text-lg flex justify-between gap-5 lg:gap-0 cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5"
                            onClick={() => setSelectedCateOption("All")}
                          >
                            <span className="text-sm sm:text-base lg:text-lg text-nowrap">
                              All
                            </span>
                            <span
                              className={`lg:hidden w-4 lg:w-5 h-4 lg:h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedCateOption === "All"
                                  ? "border-primary"
                                  : "border-border1"
                              } `}
                            >
                              <span
                                className={`w-2.5 lg:w-[11px] h-2.5 lg:h-[11px] rounded-full inline-block ${
                                  selectedCateOption === "All"
                                    ? "bg-primary"
                                    : ""
                                }`}
                              ></span>
                            </span>
                          </li>
                          <li
                            className=" lg:text-lg flex justify-between gap-5 cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5"
                            onClick={() => setSelectedCateOption("Buy")}
                          >
                            <span className="text-sm sm:text-base lg:text-lg text-nowrap">
                              Buy
                            </span>
                            <span
                              className={`lg:hidden w-4 lg:w-5 h-4 lg:h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedCateOption === "Buy"
                                  ? "border-primary"
                                  : "border-border1"
                              } `}
                            >
                              <span
                                className={`w-2.5 lg:w-[11px] h-2.5 lg:h-[11px] rounded-full inline-block ${
                                  selectedCateOption === "Buy"
                                    ? "bg-primary"
                                    : ""
                                }`}
                              ></span>
                            </span>
                          </li>
                          <li
                            className=" lg:text-lg flex justify-between gap-5 cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5"
                            onClick={() => setSelectedCateOption("Rent")}
                          >
                            <span className="text-sm sm:text-base lg:text-lg text-nowrap">
                              Rent
                            </span>
                            <span
                              className={`lg:hidden w-4 lg:w-5 h-4 lg:h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedCateOption === "Rent"
                                  ? "border-primary"
                                  : "border-border1"
                              } `}
                            >
                              <span
                                className={`w-2.5 lg:w-[11px] h-2.5 lg:h-[11px] rounded-full inline-block ${
                                  selectedCateOption === "Rent"
                                    ? "bg-primary"
                                    : ""
                                }`}
                              ></span>
                            </span>
                          </li>
                          <li
                            className=" lg:text-lg flex justify-between gap-5 cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5"
                            onClick={() =>
                              setSelectedCateOption("Commercial Rent")
                            }
                          >
                            <span className="text-sm sm:text-base lg:text-lg text-nowrap">
                              Commercial Rent
                            </span>
                            <span
                              className={`lg:hidden w-4 lg:w-5 h-4 lg:h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedCateOption === "Commercial Rent"
                                  ? "border-primary"
                                  : "border-border1"
                              } `}
                            >
                              <span
                                className={`w-2.5 lg:w-[11px] h-2.5 lg:h-[11px] rounded-full inline-block ${
                                  selectedCateOption === "Commercial Rent"
                                    ? "bg-primary"
                                    : ""
                                }`}
                              ></span>
                            </span>
                          </li>
                          <li
                            className=" lg:text-lg flex justify-between gap-5 cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5"
                            onClick={() =>
                              setSelectedCateOption("Commercial Buy")
                            }
                          >
                            <span className="text-sm sm:text-base lg:text-lg text-nowrap">
                              Commercial Buy
                            </span>
                            <span
                              className={`lg:hidden w-4 lg:w-5 h-4 lg:h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedCateOption === "Commercial Buy"
                                  ? "border-primary"
                                  : "border-border1"
                              } `}
                            >
                              <span
                                className={`w-2.5 lg:w-[11px] h-2.5 lg:h-[11px] rounded-full inline-block ${
                                  selectedCateOption === "Commercial Buy"
                                    ? "bg-primary"
                                    : ""
                                }`}
                              ></span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <span
                    className={`hidden lg:block ml-2 duration-300 ${
                      optionCatShow ? "" : "rotate-[180deg]"
                    }`}
                  >
                    <KeyboardArrowUpOutlined />
                  </span>
                </div>
                <div
                  className={`py-1.5 md:py-1 xl:py-2.5 px-2 sm:px-4 xl:px-5 rounded-lg lg:rounded-3xl xl:rounded-full border border-border1 hover:border-primary relative hover:text-primary flex justify-between items-center cursor-pointer w-fit ${
                    optionSortShow && "bg-[#00858e1a]"
                  } ${
                    selectedSortOption !== "Recently Saved" &&
                    "bg-[#00858e1a] border-primary"
                  }`}
                  onClick={toggleSortoption}
                  ref={sortRef}
                >
                  <div
                    className={`lg:min-w-[206px] xl:min-w-[245px] select-menu flex text-text2  text-sm sm:text-base xl:text-xl 2xl:text-xl font-normal leading-4 md:leading-8 ${
                      optionSortShow ? "active" : ""
                    }`}
                  >
                    <div className="select-btn hidden lg:block">
                      <span className="text-gray-500">Sort By : </span>
                      <span className="sBtn-text text-text1">
                        {selectedSortOption}
                      </span>
                    </div>
                    <div className="flex items-center justify-center lg:hidden">
                      <svg
                        className="w-4 h-4 xs:W-6 xs:h-6 button-module_button__icon--prefix__dBABA"
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
                    </div>
                    {optionSortShow && (
                      <div className="w-fit lg:w-[84%] lg:left-1/2 top-full right-0 absolute z-[1] mt-2.5 lg:-translate-x-1/2">
                        <ul className="options">
                          <li
                            className=" lg:text-lg flex justify-between gap-5 cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5"
                            onClick={() =>
                              setSelectedSortOption("Recently Saved")
                            }
                          >
                            <span className="text-sm sm:text-base lg:text-lg text-nowrap">
                              Recently Saved
                            </span>
                            <span
                              className={`lg:hidden w-4 lg:w-5 h-4 lg:h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedSortOption === "Recently Saved"
                                  ? "border-primary"
                                  : "border-border1"
                              } `}
                            >
                              <span
                                className={`w-2.5 lg:w-[11px] h-2.5 lg:h-[11px] rounded-full inline-block ${
                                  selectedSortOption === "Recently Saved"
                                    ? "bg-primary"
                                    : ""
                                }`}
                              ></span>
                            </span>
                          </li>
                          <li
                            className=" lg:text-lg flex justify-between gap-5 cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5"
                            onClick={() => setSelectedSortOption("Price (Low)")}
                          >
                            <span className="text-sm sm:text-base lg:text-lg text-nowrap">
                              Price (Low)
                            </span>
                            <span
                              className={`lg:hidden w-4 lg:w-5 h-4 lg:h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedSortOption === "Price (Low)"
                                  ? "border-primary"
                                  : "border-border1"
                              } `}
                            >
                              <span
                                className={`w-2.5 lg:w-[11px] h-2.5 lg:h-[11px] rounded-full inline-block ${
                                  selectedSortOption === "Price (Low)"
                                    ? "bg-primary"
                                    : ""
                                }`}
                              ></span>
                            </span>
                          </li>
                          <li
                            className=" lg:text-lg flex justify-between gap-5 cursor-pointer items-center bg-white hover:bg-[#f2f2f2] rounded-lg px-3 sm:px-4 py-1.5"
                            onClick={() =>
                              setSelectedSortOption("Price (High)")
                            }
                          >
                            <span className="text-sm sm:text-base lg:text-lg text-nowrap">
                              Price (High)
                            </span>
                            <span
                              className={`lg:hidden w-4 lg:w-5 h-4 lg:h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedSortOption === "Price (High)"
                                  ? "border-primary"
                                  : "border-border1"
                              } `}
                            >
                              <span
                                className={`w-2.5 lg:w-[11px] h-2.5 lg:h-[11px] rounded-full inline-block ${
                                  selectedSortOption === "Price (High)"
                                    ? "bg-primary"
                                    : ""
                                }`}
                              ></span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <span
                    className={`hidden lg:block ml-2 duration-300 ${
                      optionSortShow ? "" : "rotate-[180deg]"
                    }`}
                  >
                    <KeyboardArrowUpOutlined />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Item Shows */}
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 sm:gap-y-4 gap-x-3 md:gap-6 xs:px-10 lg:px-0">
              <ProductCard products={products}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedProperties;
