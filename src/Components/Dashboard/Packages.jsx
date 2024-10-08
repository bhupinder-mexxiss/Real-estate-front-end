import React from "react";
import silver from "../../assets/images/silver.png";
import gold from "../../assets/images/gold.png";
import platinum from "../../assets/images/platinum.png";
import { Close, Done } from "@mui/icons-material";

const Packages = () => {
  return (
    <div className="">
      <h6 className="text-2xl font-medium ">Packages</h6>
      <div className="mt-6 lg:mt-10">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          <div className="rounded-3xl border border-border1">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-5 border-b border-border1">
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-12 h-12 rounded-lg border border-[#E1E1E1] flex justify-center items-start">
                      <img src={silver} className="h-full" />
                    </div>
                    <span className="text-xl font-medium uppercase">SILVER</span>
                  </div>
                  <p className="flex gap-3 items-end">
                    <span className="text-4xl font-medium leading-9">$49</span>{" "}
                    <span className="text-[#777777] font-medium">
                      / Monthly
                    </span>
                  </p>
                </div>
                <div className="px-4 sm:px-6 py-6 pt-5">
                  <ul className="flex flex-col gap-3.5">
                    <li className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#F6F6F6] flex items-center justify-center">
                        <Done className="!text-xl" />
                      </span>
                      <span className="text-sm text-[#777777] mt-1">
                        Lorem ipsum dolor sit amet
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                        <Close className="!text-xl" />
                      </span>
                      <span className="text-sm text-[#777777] mt-1">
                        Lorem ipsum dolor sit amet
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                        <Close className="!text-xl" />
                      </span>
                      <span className="text-sm text-[#777777] mt-1">
                        Lorem ipsum dolor sit amet
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-3.5 pb-4">
                <button className="bg-primary text-lg py-2 px-5 w-full inline-block rounded-xl text-white">
                  Choose Package
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border1">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-5 border-b border-border1">
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-12 h-12 rounded-lg border border-[#E1E1E1] flex justify-center items-start">
                      <img src={gold} className="h-full" />
                    </div>
                    <span className="text-xl font-medium uppercase">GOLD</span>
                  </div>
                  <p className="flex gap-3 items-end">
                    <span className="text-4xl font-medium leading-9">$199</span>{" "}
                    <span className="text-[#777777] font-medium">
                      / Monthly
                    </span>
                  </p>
                </div>
                <div className="px-4 sm:px-6 py-6 pt-5">
                  <ul className="flex flex-col gap-3.5">
                    <li className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#F6F6F6] flex items-center justify-center">
                        <Done className="!text-xl" />
                      </span>
                      <span className="text-sm text-[#777777] mt-1">
                        Lorem ipsum dolor sit amet
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#F6F6F6] flex items-center justify-center">
                        <Done className="!text-xl" />
                      </span>
                      <span className="text-sm text-[#777777] mt-1">
                        Lorem ipsum dolor sit amet
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                        <Close className="!text-xl" />
                      </span>
                      <span className="text-sm text-[#777777] mt-1">
                        Lorem ipsum dolor sit amet
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-3.5 pb-4">
                <button className="bg-primary text-lg py-2 px-5 w-full inline-block rounded-xl text-white">
                  Choose Package
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border1">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-5 border-b border-border1">
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-12 h-12 rounded-lg border border-[#E1E1E1] flex justify-center items-start">
                      <img src={platinum} className="h-full" />
                    </div>
                    <span className="text-xl font-medium uppercase">PLATINUM</span>
                  </div>
                  <p className="flex gap-3 items-end">
                    <span className="text-4xl font-medium leading-9">
                      $1999
                    </span>{" "}
                    <span className="text-[#777777] font-medium">
                      / Monthly
                    </span>
                  </p>
                </div>
                <div className="px-4 sm:px-6 py-6 pt-5">
                  <ul className="flex flex-col gap-3.5">
                    <li className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#F6F6F6] flex items-center justify-center">
                        <Done className="!text-xl" />
                      </span>
                      <span className="text-sm text-[#777777] mt-1">
                        Lorem ipsum dolor sit amet
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#F6F6F6] flex items-center justify-center">
                        <Done className="!text-xl" />
                      </span>
                      <span className="text-sm text-[#777777] mt-1">
                        Lorem ipsum dolor sit amet
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#F6F6F6] flex items-center justify-center">
                        <Done className="!text-xl" />
                      </span>
                      <span className="text-sm text-[#777777] mt-1">
                        Lorem ipsum dolor sit amet
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-3.5 pb-4">
                <button className="bg-primary text-lg py-2 px-5 w-full inline-block rounded-xl text-white">
                  Choose Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
