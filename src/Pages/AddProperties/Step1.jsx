import React from "react";
import loginBg from "../../assets/images/loginBg.png";
import facebook1 from "../../assets/icons/facebook1.png";
import Google from "../../assets/icons/Google.png";
import { Link } from "react-router-dom";
import { ArrowBack, KeyboardArrowLeftOutlined } from "@mui/icons-material";

const Step1 = () => {
  return (
    <div className="bg-white  relative">
      <div
        className="w-full lg:w-[60%] h-full absolute bg-no-repeat bg-cover bg-center blur-sm lg:blur-0"
        style={{ backgroundImage: `url(${loginBg})` }}
      ></div>
      <div className="w-full lg:w-[40%] h-full absolute bg-black opacity-60 lg:bg-white right-0"></div>
      <div className="relative h-screen overflow-auto">
        <div className="container mx-auto">
          <div className="flex lg:justify-end justify-center">
            <div className="lg:max-w-[600px] py-14 sm:pt-16 lg:pt-14 sm:px-6 md:pl-28 md:pr-12 flex items-center min-h-screen relative lg:bg-white lg:rounded-l-[40px] ov">
              <div className="bg-white py-8 px-4 sm:p-8 rounded-lg lg:p-0 sm:min-w-[370px] ">
                <div className="lg:flex gap-4 items-center">
                <Link
                  to="/"
                  className="text-primary text-lg lg:absolute top-4 left-6 flex items-center -translate-y-4 md:-translate-x-3 lg:translate-x-0 lg:translate-y-0 border border-primary bg-primary rounded-full w-8 h-8 justify-center"
                >
                  <ArrowBack className="text-white" />
                </Link>
                  <h3 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#040404] sm:leading-[44px]">
                    Welcome
                  </h3>
                </div>
                <p className="sm:text-lg text-[#040404] mt-3 md:mt-6">
                  Let’s get you started
                </p>
                <div className="my-6 sm:mt-10 sm:mb-11">
                  <div className=" mb-[22px]">
                    <label className="text-[15px] text-[#040404]">Number</label>
                    <input
                      type="text"
                      className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-2 w-full rounded bg-[#F7F8FF]"
                      placeholder="Enter Contact Number"
                    />
                  </div>
                  <Link
                    to="/add-property/step-2"
                    className="text-center text-lg leading-5 font-medium text-white bg-primary rounded-lg sm:rounded-xl py-3 px-6 block w-full"
                  >
                    Continue
                  </Link>
                </div>
                <div className="border-b border-[#CFDFE2] mb-8">
                  <div className="relative z-10 w-fit mx-auto my-[-12px] cursor-pointer items-center px-6 bg-white swap_btn text-[#040404]">
                    Or
                  </div>
                </div>
                <div>
                  <button className="text-[#040404] text-[15px] py-2 px-6 flex w-full justify-center items-center border border-[#E2E2EC] bg-[#F7F8FF] rounded">
                    <img src={Google} alt="" className="w-[26px] mr-4" />
                    Sign in with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
