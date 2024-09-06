import React from "react";
import loginBg from "../../assets/images/loginBg.png";
import { Link } from "react-router-dom";

const OtpVerification = () => {
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
            <div className="lg:max-w-[600px] py-14 sm:px-6 md:px-28 flex items-center min-h-screen relative lg:bg-white lg:rounded-l-[40px] ov">
              <div className="bg-white py-8 px-4 sm:p-8 rounded-lg lg:p-0">
                <h3 className="text-3xl 2xs:text-4xl sm:text-[44px] font-bold text-[#040404] leading-[44px]">
                  OTP Verification
                </h3>
                <p className=" text-base 2xs:text-lg sm:text-xl text-[#040404] mt-4 sm:mt-6">
                  Enter the OTP sent on{" "}
                  <span className="font-medium">dum******.com</span>
                </p>
                <div className="my-6 sm:mt-10 sm:mb-11">
                  <div className=" mb-[22px]">
                    <div className="flex gap-2 sm:gap-4 md::gap-6 justify-center">
                      <input
                        type="text"
                        className="w-[34px] px-0 sm:w-[38px] sm:h-[38px] text-center leading-4 text-[#040404] border-[#E2E2EC] mt-2 rounded bg-[#F7F8FF]"
                      />
                      <input
                        type="text"
                        className="w-[34px] px-0 sm:w-[38px] sm:h-[38px] text-center leading-4 text-[#040404] border-[#E2E2EC] mt-2 rounded bg-[#F7F8FF]"
                      />
                      <input
                        type="text"
                        className="w-[34px] px-0 sm:w-[38px] sm:h-[38px] text-center leading-4 text-[#040404] border-[#E2E2EC] mt-2 rounded bg-[#F7F8FF]"
                      />
                      <input
                        type="text"
                        className="w-[34px] px-0 sm:w-[38px] sm:h-[38px] text-center leading-4 text-[#040404] border-[#E2E2EC] mt-2 rounded bg-[#F7F8FF]"
                      />
                      <input
                        type="text"
                        className="w-[34px] px-0 sm:w-[38px] sm:h-[38px] text-center leading-4 text-[#040404] border-[#E2E2EC] mt-2 rounded bg-[#F7F8FF]"
                      />
                      <input
                        type="text"
                        className="w-[34px] px-0 sm:w-[38px] sm:h-[38px] text-center leading-4 text-[#040404] border-[#E2E2EC] mt-2 rounded bg-[#F7F8FF]"
                      />
                    </div>
                  </div>
                  <button className="text-xl leading-5 font-medium text-white bg-primary rounded-lg sm:rounded-2xl py-[15px] px-6 block w-full">
                    Verify Now
                  </button>
                </div>
                <p className="text-base leading-6 text-center">
                  Didn’t receive the OTP? 
                  <Link className="font-medium"> Resend OTP</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
