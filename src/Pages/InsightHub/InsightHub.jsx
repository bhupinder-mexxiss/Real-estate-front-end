import React from "react";
import InsigntHubBg from "../../assets/images/InsigntHubBg.png";
import house1 from "../../assets/images/house1.png";
import { DownloadOutlined, VerticalAlignBottomOutlined } from "@mui/icons-material";

const InsightHub = () => {
  return (
    <div className="pb-16 ">
      <div
        style={{
          backgroundImage: `url(${InsigntHubBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="pt-24 2xs:pt-28 pb-24 sm:pt-44 sm:pb-28 flex items-center banner relative before:!bg-[#00000087]"
      >
        <div className="container mx-auto relative z-0">
          <div className="">
            <h3 className="text-white text-[28px] 2xs:text-[34px] xs:text-4xl sm:text-[50px] md:text-[70px] lg:text-[90px]2xs:leading-[80px] md:leading-[100px] lg:leading-[110px]">
              Insights Hub UAE
            </h3>
            <p className="text-base sm:text-lg text-white mt-6 max-w-[830px]">
              Explore Property Finder's one-stop HUB for comprehensive
              publications  on UAE, Egypt, Qatar, Bahrain, and KSA real estate.
              Stay informed with the latest trends, market analysis, and expert
              insights in one convenient HUB
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 md:mt-24">
      {/* featured */}
        <div className="featured mb-16 md:mb-24">
          <h4 className="title_Border text-[24px] sm:text-[28px] md:text-[32px] text-text1 font-medium mb-10">
            Featured
          </h4>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card pt-3 pb-6 px-7 bg-white rounded-[20px] relative">
                <button className="flex items-center justify-center border p-2 rounded-full absolute right-3 top-4 border-gray-400 text-gray-500 duration-300 bg-white hover:bg-primary hover:text-white hover:border-primary">
                  <VerticalAlignBottomOutlined className="!text-lg" />
                </button>
                <div className="h-60">
                  <img
                    src={house1}
                    alt=""
                    className="max-w-[200px] w-full mx-auto h-full object-cover rounded-2xl"
                  />
                </div>
                <p className="mt-5 text-text2 text-xs mb-3">
                  <span>March 25, 2024</span> |{" "}
                  <span>Quarterly Market Watch</span>
                </p>
                <h6 className="text-text1 sm:text-lg font-medium leading-6 cursor-pointer hover:text-primary duration-300">
                  Quarterly Residential Real Estate Insights
                </h6>
              </div>
              <div className="card pt-3 pb-6 px-7 bg-white rounded-[20px] relative">
                <button className="flex items-center justify-center border p-2 rounded-full absolute right-3 top-4 border-gray-400 text-gray-500 duration-300 bg-white hover:bg-primary hover:text-white hover:border-primary">
                  <VerticalAlignBottomOutlined className="!text-lg" />
                </button>
                <div className="h-60">
                  <img
                    src={house1}
                    alt=""
                    className="max-w-[200px] w-full mx-auto h-full object-cover rounded-2xl"
                  />
                </div>
                <p className="mt-5 text-text2 text-xs mb-3">
                  <span>March 25, 2024</span> |{" "}
                  <span>Quarterly Market Watch</span>
                </p>
                <h6 className="text-text1 sm:text-lg font-medium leading-6 cursor-pointer hover:text-primary duration-300">
                  Quarterly Residential Real Estate Insights
                </h6>
              </div>
              <div className="card pt-3 pb-6 px-7 bg-white rounded-[20px] relative">
                <button className="flex items-center justify-center border p-2 rounded-full absolute right-3 top-4 border-gray-400 text-gray-500 duration-300 bg-white hover:bg-primary hover:text-white hover:border-primary">
                  <VerticalAlignBottomOutlined className="!text-lg" />
                </button>
                <div className="h-60">
                  <img
                    src={house1}
                    alt=""
                    className="max-w-[200px] w-full mx-auto h-full object-cover rounded-2xl"
                  />
                </div>
                <p className="mt-5 text-text2 text-xs mb-3">
                  <span>March 25, 2024</span> |{" "}
                  <span>Quarterly Market Watch</span>
                </p>
                <h6 className="text-text1 sm:text-lg font-medium leading-6 cursor-pointer hover:text-primary duration-300">
                  Quarterly Residential Real Estate Insights
                </h6>
              </div>
            </div>
          </div>
        </div>
        {/* recent_added */}
        <div className="recent_added ">
          <h4 className="title_Border text-[24px] sm:text-[28px] md:text-[32px] text-text1 font-medium mb-10">
            Recent Added
          </h4>
          <div>
            <div className="grid grid-cols-1 gap-8">
              <div className="card sm:flex py-4 px-4 bg-white rounded-[20px] relative">
                <div className="sm:flex gap-6 xl:gap-8 items-center">
                  <div className="min-w-[180px] max-w-[180px] h-[200px] mx-auto">
                    <img
                      src={house1}
                      alt=""
                      className="w-full mx-auto h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div>
                    <p className=" text-text2 text-xs mb-4 md:mb-3 mt-6 sm:mt-0">
                      <span>March 25, 2024</span> |{" "}
                      <span>Quarterly Market Watch</span>
                    </p>
                    <h6 className="text-text1 sm:text-lg font-medium leading-6 cursor-pointer hover:text-primary duration-300 mb-4 md:mb-7">
                      UAE Q2 2024, Market Watch Digest Residential Real Estate
                      Insights
                    </h6>
                    <p className=" text-text2 text-xs sm:text-sm">
                      Abu Dhabi’s real estate market witnessed a 17.8%
                      year-on-year decrease in recorded sales transactions, with
                      2,489 transactions in Q2 2024 ...
                    </p>
                  </div>
                </div>
                <div className="self-center md:w-2/5">
                  <button className="flex items-center justify-center border p-2 lg:px-8 xl:px-12 lg:py-3 ml-auto lg:bg-primary lg:text-white rounded-full absolute md:static right-3 top-3 border-gray-400 text-gray-500 duration-300 bg-white hover:bg-primary hover:text-white hover:border-primary">
                    <VerticalAlignBottomOutlined className="!text-lg sm:!text-2xl lg:!hidden" />
                    <span className="hidden lg:inline-block"><DownloadOutlined/> Download PDF</span>
                  </button>
                </div>
              </div>
              <div className="card sm:flex py-4 px-4 bg-white rounded-[20px] relative">
                <div className="sm:flex gap-6 xl:gap-8 items-center">
                  <div className="min-w-[180px] max-w-[180px] h-[200px] mx-auto">
                    <img
                      src={house1}
                      alt=""
                      className="w-full mx-auto h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div>
                    <p className=" text-text2 text-xs mb-4 md:mb-3 mt-6 sm:mt-0">
                      <span>March 25, 2024</span> |{" "}
                      <span>Quarterly Market Watch</span>
                    </p>
                    <h6 className="text-text1 sm:text-lg font-medium leading-6 cursor-pointer hover:text-primary duration-300 mb-4 md:mb-7">
                      UAE Q2 2024, Market Watch Digest Residential Real Estate
                      Insights
                    </h6>
                    <p className=" text-text2 text-xs sm:text-sm">
                      Abu Dhabi’s real estate market witnessed a 17.8%
                      year-on-year decrease in recorded sales transactions, with
                      2,489 transactions in Q2 2024 ...
                    </p>
                  </div>
                </div>
                <div className="self-center md:w-2/5">
                  <button className="flex items-center justify-center border p-2 lg:px-8 xl:px-12 lg:py-3 ml-auto lg:bg-primary lg:text-white rounded-full absolute md:static right-3 top-3 border-gray-400 text-gray-500 duration-300 bg-white hover:bg-primary hover:text-white hover:border-primary">
                    <VerticalAlignBottomOutlined className="!text-lg sm:!text-2xl lg:!hidden" />
                    <span className="hidden lg:inline-block"><DownloadOutlined/> Download PDF</span>
                  </button>
                </div>
              </div>
              <div className="card sm:flex py-4 px-4 bg-white rounded-[20px] relative">
                <div className="sm:flex gap-6 xl:gap-8 items-center">
                  <div className="min-w-[180px] max-w-[180px] h-[200px] mx-auto">
                    <img
                      src={house1}
                      alt=""
                      className="w-full mx-auto h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div>
                    <p className=" text-text2 text-xs mb-4 md:mb-3 mt-6 sm:mt-0">
                      <span>March 25, 2024</span> |{" "}
                      <span>Quarterly Market Watch</span>
                    </p>
                    <h6 className="text-text1 sm:text-lg font-medium leading-6 cursor-pointer hover:text-primary duration-300 mb-4 md:mb-7">
                      UAE Q2 2024, Market Watch Digest Residential Real Estate
                      Insights
                    </h6>
                    <p className=" text-text2 text-xs sm:text-sm">
                      Abu Dhabi’s real estate market witnessed a 17.8%
                      year-on-year decrease in recorded sales transactions, with
                      2,489 transactions in Q2 2024 ...
                    </p>
                  </div>
                </div>
                <div className="self-center md:w-2/5">
                  <button className="flex items-center justify-center border p-2 lg:px-8 xl:px-12 lg:py-3 ml-auto lg:bg-primary lg:text-white rounded-full absolute md:static right-3 top-3 border-gray-400 text-gray-500 duration-300 bg-white hover:bg-primary hover:text-white hover:border-primary">
                    <VerticalAlignBottomOutlined className="!text-lg sm:!text-2xl lg:!hidden" />
                    <span className="hidden lg:inline-block"><DownloadOutlined/> Download PDF</span>
                  </button>
                </div>
              </div>
              <div className="card sm:flex py-4 px-4 bg-white rounded-[20px] relative">
                <div className="sm:flex gap-6 xl:gap-8 items-center">
                  <div className="min-w-[180px] max-w-[180px] h-[200px] mx-auto">
                    <img
                      src={house1}
                      alt=""
                      className="w-full mx-auto h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div>
                    <p className=" text-text2 text-xs mb-4 md:mb-3 mt-6 sm:mt-0">
                      <span>March 25, 2024</span> |{" "}
                      <span>Quarterly Market Watch</span>
                    </p>
                    <h6 className="text-text1 sm:text-lg font-medium leading-6 cursor-pointer hover:text-primary duration-300 mb-4 md:mb-7">
                      UAE Q2 2024, Market Watch Digest Residential Real Estate
                      Insights
                    </h6>
                    <p className=" text-text2 text-xs sm:text-sm">
                      Abu Dhabi’s real estate market witnessed a 17.8%
                      year-on-year decrease in recorded sales transactions, with
                      2,489 transactions in Q2 2024 ...
                    </p>
                  </div>
                </div>
                <div className="self-center md:w-2/5">
                  <button className="flex items-center justify-center border p-2 lg:px-8 xl:px-12 lg:py-3 ml-auto lg:bg-primary lg:text-white rounded-full absolute md:static right-3 top-3 border-gray-400 text-gray-500 duration-300 bg-white hover:bg-primary hover:text-white hover:border-primary">
                    <VerticalAlignBottomOutlined className="!text-lg sm:!text-2xl lg:!hidden" />
                    <span className="hidden lg:inline-block"><DownloadOutlined/> Download PDF</span>
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

export default InsightHub;
