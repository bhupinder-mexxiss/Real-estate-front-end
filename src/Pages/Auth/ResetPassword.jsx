import React from "react";
import loginBg from "../../assets/images/loginBg.png";
import { ArrowBack, KeyboardArrowLeftOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ResetPassword = () => {
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
            <div></div>
            <div className="lg:max-w-[600px] py-14 sm:pt-16 lg:pt-14 sm:px-6 md:px-28 flex items-center min-h-screen relative lg:bg-white lg:rounded-l-[40px] ov">
              <div className="bg-white py-8 px-4 sm:p-8 rounded-lg lg:p-0">
                <Link
                  to="/auth/login"
                  className="text-primary text-lg lg:absolute top-4 left-6 flex items-center -translate-y-4 md:-translate-x-3 lg:translate-x-0 lg:translate-y-0 border border-primary bg-primary rounded-full w-8 h-8 justify-center"
                >
                  <ArrowBack className="text-white" />
                </Link>
                <h3 className="text-3xl 2xs:text-4xl sm:text-[44px] font-bold text-[#040404] leading-[44px]">
                  Reset Password
                </h3>
                <p className="sm:text-lg text-[#040404] mt-3 md:mt-6">
                  Please create a new password
                </p>
                <div className="mt-6 sm:mt-10">
                  <div className=" mb-[22px]">
                    <label className="text-[15px] text-[#040404]">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-2 w-full rounded bg-[#F7F8FF]"
                      placeholder="New password"
                    />
                  </div>
                  <div className=" mb-[22px]">
                    <label className="text-[15px] text-[#040404]">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-2 w-full rounded bg-[#F7F8FF]"
                      placeholder="Confirm password"
                    />
                  </div>
                  <button className="text-xl leading-5 font-medium text-white bg-primary rounded-lg sm:rounded-2xl py-[15px] px-6 block w-full">
                    Continue
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

export default ResetPassword;
