import React from "react";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/searchIcon.png";
import shareIcon from "../../assets/icons/share-07.png";
import deleteIcon from "../../assets/icons/delete.png";
import pencil from "../../assets/icons/pencil.png";
import house1 from "../../assets/images/house1.png";

const Listing = () => {
  return (
    <>
      <div className="xl:flex gap-8 ">
        <div className="xl:w-[65%]">
          <div className="sm:flex items-center gap-6 2xl:gap-10 flex-wrap">
            <ul className="flex items-center gap-6 2xl:gap-10 flex-wrap">
              <li>
                <button className="text-xl text-[#1B2E5A] font-medium leading-6 pb-2 border-b-2 border-[#1B2E5A]">
                  All
                </button>
              </li>
              <li>
                <button className="text-xl text-[#898896] font-medium leading-6 pb-2 ">
                  Active
                </button>
              </li>
              <li>
                <button className="text-xl text-[#898896] font-medium leading-6 pb-2 ">
                  Deactivated
                </button>
              </li>
            </ul>
            <div className="border border-black rounded-lg sm:rounded-full flex items-center pl-4 pr-6 gap-3 py-.5 mt-4 sm:mt-0">
              <img
                src={searchIcon}
                alt=""
                className="min-w-[15px] w-[15px] brightness-0"
              />
              <input
                type="text"
                className="placeholder:text-[#A8A8A8] border-none px-0 py-2 sm:py-3"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="mt-[30px]">
            <div className="rounded-[20px] bg-white shadow-[10px_10px_30px_0px_#0000001F] p-3 flex gap-4 sm:gap-[22px] flex-wrap items-start mb-6">
              <div className="rounded-2xl overflow-hidden w-full xs:w-28 sm:min-w-36 sm:w-36 h-56 xs:h-28 sm:h-36">
                <img
                  src={house1}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full xs:w-[calc(100%_-_148px)] sm:w-[calc(100%_-_168px)]">
                <div className="mb-2.5 flex justify-between items-center gap-3 ">
                  <h4 className="text-xl font-medium text-nowrap text-ellipsis overflow-hidden">
                    Title of the Property{" "}
                  </h4>
                  <ul className="flex items-center gap-2.5">
                    <li>
                      <button className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                        <img src={shareIcon} alt="" className="w-3" />
                      </button>
                    </li>
                    <li>
                      <button className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                        <img src={pencil} alt="" className="w-3" />
                      </button>
                    </li>
                    <li>
                      <button className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                        <img src={deleteIcon} alt="" className="w-3" />
                      </button>
                    </li>
                  </ul>
                </div>
                <p className="text-nowrap overflow-hidden text-ellipsis text-[#77767A] sm:mb-5">
                  Lorem ipsum dolor sit amet, consectetuer Lorem ipsum...
                </p>
                <div className="sm:flex justify-between hidden">
                  <div>
                    <p className="text-lg text-primary font-medium mb-1.5">
                      $35.00/month
                    </p>
                    <span className="text-sm text-[#28AD35]">Active</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-1.5">Posted on</p>
                    <span className="text-sm text-[#7E7E7E]">20 Aug 2024</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full sm:hidden">
                <div>
                  <p className="text-lg text-primary font-medium mb-1.5">
                    $35.00/month
                  </p>
                  <span className="text-sm text-[#28AD35]">Active</span>
                </div>
                <div>
                  <p className="text-lg font-medium mb-1.5">Posted on</p>
                  <span className="text-sm text-[#7E7E7E]">20 Aug 2024</span>
                </div>
              </div>
            </div>
            <div className="rounded-[20px] bg-white shadow-[10px_10px_30px_0px_#0000001F] p-3 flex gap-4 sm:gap-[22px] flex-wrap items-start mb-6">
              <div className="rounded-2xl overflow-hidden w-full xs:w-28 sm:min-w-36 sm:w-36 h-56 xs:h-28 sm:h-36">
                <img
                  src={house1}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full xs:w-[calc(100%_-_148px)] sm:w-[calc(100%_-_168px)]">
                <div className="mb-2.5 flex justify-between items-center gap-3 ">
                  <h4 className="text-xl font-medium text-nowrap text-ellipsis overflow-hidden">
                    Title of the Property{" "}
                  </h4>
                  <ul className="flex items-center gap-2.5">
                    <li>
                      <button className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                        <img src={shareIcon} alt="" className="w-3" />
                      </button>
                    </li>
                    <li>
                      <button className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                        <img src={pencil} alt="" className="w-3" />
                      </button>
                    </li>
                    <li>
                      <button className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                        <img src={deleteIcon} alt="" className="w-3" />
                      </button>
                    </li>
                  </ul>
                </div>
                <p className="text-nowrap overflow-hidden text-ellipsis text-[#77767A] sm:mb-5">
                  Lorem ipsum dolor sit amet, consectetuer Lorem ipsum...
                </p>
                <div className="sm:flex justify-between hidden">
                  <div>
                    <p className="text-lg text-primary font-medium mb-1.5">
                      $35.00/month
                    </p>
                    <span className="text-sm text-[#28AD35]">Active</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-1.5">Posted on</p>
                    <span className="text-sm text-[#7E7E7E]">20 Aug 2024</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full sm:hidden">
                <div>
                  <p className="text-lg text-primary font-medium mb-1.5">
                    $35.00/month
                  </p>
                  <span className="text-sm text-[#28AD35]">Active</span>
                </div>
                <div>
                  <p className="text-lg font-medium mb-1.5">Posted on</p>
                  <span className="text-sm text-[#7E7E7E]">20 Aug 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:block w-[35%]">
          <div className="rounded-[20px] shadow-[10px_10px_30px_0px_#0000001F] bg-white py-6 px-7 mb-[30px]">
            <p className="text-22 text-[#070A29] font-medium mb-3.5">
              List Property to Sell
            </p>
            <p className="text-sm text-[#898896] mb-5">
              100% complete listing with specofoc details about the rooms get
              you more lead.
            </p>
            <Link className="text-sm text-primary font-medium">
              Add Property <KeyboardArrowRightOutlined className="!text-lg" />
            </Link>
          </div>
          <div className="rounded-[20px] shadow-[10px_10px_30px_0px_#0000001F] bg-white py-6 px-7 mb-[30px]">
            <p className="text-22 text-[#070A29] font-medium mb-3.5">
              List Property to Rent
            </p>
            <p className="text-sm text-[#898896] mb-5">
              100% complete listing with specofoc details about the rooms get
              you more lead.
            </p>
            <Link className="text-sm text-primary font-medium">
              Add Property <KeyboardArrowRightOutlined className="!text-lg" />
            </Link>
          </div>
          <div className="rounded-[20px] shadow-[10px_10px_30px_0px_#0000001F] bg-white py-6 px-7">
            <p className="text-22 text-[#070A29] font-medium mb-3.5">
              Add New Project
            </p>
            <p className="text-sm text-[#898896] mb-5">
              100% complete listing with specofoc details about the rooms get
              you more lead.
            </p>
            <Link className="text-sm text-primary font-medium">
              Add Property <KeyboardArrowRightOutlined className="!text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
