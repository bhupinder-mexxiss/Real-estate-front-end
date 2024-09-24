import React from "react";
import loginBg from "../../assets/images/loginBg.png";
import facebook1 from "../../assets/icons/facebook1.png";
import Google from "../../assets/icons/Google.png";
import { Link } from "react-router-dom";
import { ArrowBack, KeyboardArrowLeftOutlined } from "@mui/icons-material";

const Auth = () => {
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
            <div className="lg:max-w-[600px] py-14 sm:pt-16 lg:pt-14 sm:px-6 md:px-28 flex items-center min-h-screen relative lg:bg-white lg:rounded-l-[40px]  first-line:">
              <div className="bg-white py-8 px-4 sm:p-8 rounded-lg lg:p-0">
                <Link
                  to="/"
                  className="text-primary text-lg lg:absolute top-4 left-6 flex items-center -translate-y-4 md:-translate-x-3 lg:translate-x-0 lg:translate-y-0 border border-primary bg-primary rounded-full w-8 h-8 justify-center"
                >
                  <ArrowBack className="text-white" />
                </Link>
                <div className="flex gap-4 items-center">
                  <h3 className="text-4xl sm:text-[44px] font-bold text-[#040404] leading-[44px]">
                    Welcome 👋
                  </h3>
                </div>
                <p className="sm:text-lg  text-[#040404] mt-3 sm:mt-6">
                  See which properties you have contacted.
                </p>
                <div className="my-6 sm:mt-10 sm:mb-110">
                  <div className=" mb-[22px]">
                    <label className="text-[15px] text-[#040404]">Email</label>
                    <input
                      type="email"
                      className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-2 w-full rounded bg-[#F7F8FF]"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className=" mb-[22px]">
                    <label className="text-[15px] text-[#040404]">
                      Password
                    </label>
                    <input
                      type="password"
                      className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-2 w-full rounded bg-[#F7F8FF]"
                      placeholder="Enter Password"
                    />
                    <p className="text-end">
                      <Link
                        to="/auth/forgot-password"
                        className="text-sm inline-block mt-1 text-red-500"
                      >
                        Forgot password?
                      </Link>
                    </p>
                  </div>
                  <button className="text-xl leading-5 font-medium text-white bg-primary rounded-lg sm:rounded-2xl py-[15px] px-6 block w-full">
                    Log In
                  </button>
                  <p className="mt-5 text-lg text-center text-[#040404]">
                    Don't have an account?{" "}
                    <Link
                      to="/auth/signup"
                      className="font-medium text-primary border-b border-primary pb-0.5"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
                <div className="border-b border-[#CFDFE2] mb-8">
                  <div className="relative z-10 w-fit mx-auto my-[-12px] cursor-pointer items-center px-6 bg-white swap_btn text-[#040404]">
                    Or
                  </div>
                </div>
                <div className="mb-4 sm:mb-10">
                  <button className="text-[#040404] text-[15px] py-3 px-6 flex w-full justify-center items-center border border-[#E2E2EC] bg-[#F7F8FF] rounded mb-[22px]">
                    <img src={Google} alt="" className="w-[26px] mr-4" />
                    Sign in with Google
                  </button>
                  <button className="text-[#040404] text-[15px] py-3 px-6 flex w-full justify-center items-center border border-[#E2E2EC] bg-[#F7F8FF] rounded ">
                    <img src={facebook1} alt="" className="w-[26px] mr-4" />
                    Sign in with Facebook
                  </button>
                </div>
                <p className="text-base leading-6 text-center">
                  By registering you accept our{" "}
                  <span className="text-primary">Terms & Conditions</span>{" "}
                  &nbsp; and{" "}
                  <span className="text-primary">our privacy policy</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
