import React, { useState } from "react";
import loginBg from "../../assets/images/loginBg.png";
import USAFlag from "../../assets/images/USAFlag.png";
import { Link } from "react-router-dom";
import "./AddProperties.css";
import { ArrowBack, KeyboardArrowLeftOutlined } from "@mui/icons-material";

const step2 = () => {
  const [isActive, setIsActive] = useState("Owner");
  const [value, setValue] = useState();

  return (
    <div className="bg-white  relative step2">
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
              <Link
                to="/add-property"
                className="text-primary text-lg lg:absolute top-4 left-6 flex items-center -translate-y-4 md:-translate-x-3 lg:translate-x-0 lg:translate-y-0 border border-primary bg-primary rounded-full w-8 h-8 justify-center"
              >
                <ArrowBack className="text-white" />
              </Link>
                <ul className="flex justify-between gap-2.5 mb-6 sm:mb-12">
                  <li
                    className={`text-center sm:text-lg py-1.5 px-3 xs:px-4 sm:px-6 cursor-pointer rounded-lg sm:rounded-full border  ${
                      isActive === "Owner"
                        ? "border-primary bg-primary text-white font-medium"
                        : "border-border1 text-text2"
                    }`}
                    onClick={() => setIsActive("Owner")}
                  >
                    Owner
                  </li>
                  <li
                    className={`text-center sm:text-lg py-1.5 px-3 xs:px-4 sm:px-6 cursor-pointer rounded-lg sm:rounded-full border  ${
                      isActive === "Broker"
                        ? "border-primary bg-primary text-white font-medium"
                        : "border-border1 text-text2"
                    }`}
                    onClick={() => setIsActive("Broker")}
                  >
                    Broker
                  </li>
                  <li
                    className={`text-center sm:text-lg py-1.5 px-3 xs:px-4 sm:px-6 cursor-pointer rounded-lg sm:rounded-full border  ${
                      isActive === "Builder"
                        ? "border-primary bg-primary text-white font-medium"
                        : "border-border1 text-text2"
                    }`}
                    onClick={() => setIsActive("Builder")}
                  >
                    Builder
                  </li>
                </ul>
                <div className="flex gap-4 items-center">
                  <h3 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#040404] sm:leading-[44px]">
                    Welcome
                  </h3>
                </div>
                <p className="sm:text-lg text-[#040404] mt-3 md:mt-6">
                  Tell us more about yourself
                </p>
                <div className="mt-6 sm:mt-10">
                  <div>
                    {isActive === "Broker" && (
                      <div className="mb-5">
                        <p className="text-[15px] text-[#040404]">
                          Property Type
                        </p>
                        <ul className="flex flex-wrap gap-3.5 mt-2">
                          <li>
                            <input
                              type="radio"
                              name="opt"
                              id="Residential"
                              class="form-radio hidden"
                            />
                            <label
                              for="Residential"
                              class="text-center text-[15px] text-[#8B8B8B] bg-[#F7F8FF] py-2.5 px-5 sm:px-7 inline-block rounded-md border border-[#E2E2EC] "
                            >
                              <span>Residential</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="opt"
                              id="Commercial"
                              class="form-radio hidden"
                            />
                            <label
                              for="Commercial"
                              class="text-center text-[15px] text-[#8B8B8B] bg-[#F7F8FF] py-2.5 px-5 sm:px-7 inline-block rounded-md border border-[#E2E2EC] "
                            >
                              <span>Commercial</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="opt"
                              id="Both"
                              class="form-radio hidden"
                            />
                            <label
                              for="Both"
                              class="text-center text-[15px] text-[#8B8B8B] bg-[#F7F8FF] py-2.5 px-5 sm:px-7 inline-block rounded-md border border-[#E2E2EC] "
                            >
                              <span>Both</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    )}
                    <div className=" mb-5">
                      <label className="text-[15px] text-[#040404]">
                        Email
                      </label>
                      <input
                        type="email"
                        className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-2 w-full rounded bg-[#F7F8FF]"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <div className=" mb-5">
                      <label className="text-[15px] text-[#040404]">Name</label>
                      <input
                        type="text"
                        className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-2 w-full rounded bg-[#F7F8FF]"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className=" mb-5">
                      <label className="text-[15px] text-[#040404]">
                        Contact Number
                      </label>
                      <div className="py-[9px] px-4 rounded border-[#E2E2EC] border mt-2 bg-[#F7F8FF]">
                        <input
                          type="text"
                          className=" py-0 px-0 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-none w-full bg-[#F7F8FF] "
                          placeholder="Enter Contact Number"
                        />
                      </div>
                    </div>
                    <div className=" mb-5">
                      <label className="text-[15px] text-[#040404]">
                        Aadhar Number
                      </label>
                      <input
                        type="text"
                        className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-2 w-full rounded bg-[#F7F8FF]"
                        placeholder="XXXXXXXXXXXX"
                      />
                    </div>
                    {isActive === "Builder" && (
                      <>
                        <div className=" mb-5">
                          <label className="text-[15px] text-[#040404]">
                            Business Name
                          </label>
                          <input
                            type="text"
                            className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-2 w-full rounded bg-[#F7F8FF]"
                            placeholder="Name"
                          />
                        </div>
                        <div className=" mb-5">
                          <label className="text-[15px] text-[#040404]">
                            GST No.
                          </label>
                          <input
                            type="text"
                            className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-2 w-full rounded bg-[#F7F8FF]"
                            placeholder="Enter GST Number"
                          />
                        </div>
                      </>
                    )}
                    <Link
                      to="/list-property/new"
                      className="text-center md:text-lg leading-5 font-medium text-white bg-primary rounded-lg sm:rounded-xl py-3 px-6 block w-full"
                    >
                      Next
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default step2;
