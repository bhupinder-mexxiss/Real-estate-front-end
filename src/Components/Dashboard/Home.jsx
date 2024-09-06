import React from "react";
import totalProperty from "../../assets/icons/totalProperty.png";
import soldProperty from "../../assets/icons/soldProperty.png";
import activeProperty from "../../assets/icons/activeProperty.png";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="xl:flex gap-8 ">
        <div className="xl:w-[65%]">
          <div className="flex xs:grid xs:grid-cols-2 sm:grid-cols-3 md:flex gap-4 2xl:gap-6 md:justify-between flex-wrap">
            <div className="rounded-[20px] flex-1 md:w-[31%] xl:w-[47%] 2xl:w-auto 2xl:min-w-[30%] shadow-[10px_10px_30px_0px_#0000001F] bg-white p-4">
              <div className="flex items-center gap-6 mb-3">
                <div className="w-[62px] h-[62px] rounded-[20px] bg-[#FCF0F2] flex items-center justify-center">
                  <img src={totalProperty} alt="" className="w-8 " />
                </div>
                <span className="text-3xl text-[#DD626A] font-medium">3</span>
              </div>
              <p className="text-[#1B2E5A] text-nowrap">Total Property Listed</p>
            </div>
            <div className="rounded-[20px] flex-1 md:w-[31%] xl:w-[47%] 2xl:w-auto 2xl:min-w-[30%] shadow-[10px_10px_30px_0px_#0000001F] bg-white p-4">
              <div className="flex items-center gap-6 mb-3">
                <div className="w-[62px] h-[62px] rounded-[20px] bg-[#EEF3FC] flex items-center justify-center">
                  <img src={activeProperty} alt="" className="w-8 " />
                </div>
                <span className="text-3xl text-[#74A9F0] font-medium">3</span>
              </div>
              <p className="text-[#1B2E5A] text-nowrap">Active properties</p>
            </div>
            <div className="rounded-[20px] flex-1 md:w-[31%] xl:w-[47%] 2xl:w-auto 2xl:min-w-[30%] shadow-[10px_10px_30px_0px_#0000001F] bg-white p-4">
              <div className="flex items-center gap-6 mb-3">
                <div className="w-[62px] h-[62px] rounded-[20px] bg-[#FEEFC2] flex items-center justify-center">
                  <img src={soldProperty} alt="" className="w-8 " />
                </div>
                <span className="text-3xl text-[#FBBF09] font-medium">3</span>
              </div>
              <p className="text-[#1B2E5A] text-nowrap">Properties sold</p>
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

export default Home;
