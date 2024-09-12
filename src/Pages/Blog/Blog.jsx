import React from "react";
import searchIcon from "../../assets/icons/searchIcon.png";
import share from "../../assets/icons/share.png";
import arrowCircle from "../../assets/icons/arrowCircle.png";
import house1 from "../../assets/images/house1.png";
import {
  KeyboardArrowRightOutlined,
  OutboundOutlined,
} from "@mui/icons-material";
import Slider from "react-slick";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import { Link } from "react-router-dom";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="pt-8 pb-[88px]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 items-center mb-10">
          <h4 className="text-3xl font-medium text-text1 order-2 md:order-1 mt-5 md:mt-0">
            Latest on the Blog
          </h4>
          <div className="w-full relative  order-1 md:order-2">
            <div className="py-1.5 pl-3 md:pl-6 pr-2 md:pr-3 rounded-full border border-border1 hover:border-primary relative hover:text-primary text-sm duration-300 cursor-pointer font-medium flex">
              <input
                type="text"
                className="inline-block w-full border-none ring-0 focus:ring-0 text-text2 text-sm xs:text-base font-normal px-0 py-0 leading-4 md:leading-8 pr-4 placeholder:text-text2 bg-transparent"
                placeholder="Looking for something special?"
              />
              <span className="min-w-8 min-h-8 rounded-full flex items-center justify-center bg-primary ">
                <img src={searchIcon} alt="" className=" w-3 md:w-[15px]" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mb-14">
          <div className="max-w-[400px] sm:max-w-max mx-auto lg:w-1/2 rounded-[20px] bg-white overflow-hidden sm:flex lg:flex-col justify-between ">
            <Link to="/blog/market-watch-digest-residential" className="min-h-full lg:min-h-max lg:h-full inline-block">
              <img
                src={house1}
                alt=""
                className="w-full lg:max-h-full h-full object-cover"
              />
            </Link>
            <div className="px-4 py-3 md:py-6">
              <p className="text-text2 flex justify-between items-center mb-4">
                <span className="text-sm">June 25, 2024</span>{" "}
                <span className="px-6 py-1 border border-border1 text-xs rounded-full">
                  Decor
                </span>
              </p>
              <Link
                to="/blog/market-watch-digest-residential"
                className=" sm:text-lg font-medium text-text1 hover:text-primary duration-300 cursor-pointer inline-block mb-3"
              >
                UAE Q2 2024, Market Watch Digest Residential Real Estate
                Insights
              </Link>
              <p className="text-sm text-text2">
                Abu Dhabi’s real estate market witnessed a 17.8% year-on-year
                decrease in recorded sales transactions, with 2,489 transactions
                in Q2 2024 ...
              </p>
              <div className="mt-5 border-t pt-4">
                {" "}
                <p className="text-text2 flex justify-between items-center ">
                  <Link
                    to="/blog/market-watch-digest-residential"
                    className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium"
                  >
                    Read <KeyboardArrowRightOutlined className="text-primary" />
                  </Link>{" "}
                  <span className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium">
                    Share
                    <img src={share} alt="" className="w-4 ml-1.5" />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h5 className="text-2xl font-medium text-text1 mb-8">
              Popular Posts
            </h5>
            <div className="grid grid-cols-1 gap-6">
              <div className="max-w-[400px] sm:max-w-max mx-auto rounded-[20px] bg-white overflow-hidden flex flex-col sm:flex-row items-center">
                <div className="py-6 px-5 sm:w-3/5 order-2 sm:order-1">
                  <p className="text-text2 flex justify-between items-center mb-6">
                    <span className="text-sm">June 25, 2024</span>{" "}
                    <span className="px-6 py-1 border border-border1 text-xs rounded-full">
                      Decor
                    </span>
                  </p>
                  <Link
                    to="/blog/market-watch-digest-residential"
                    className="inline-block  sm:text-lg font-medium text-text1 hover:text-primary duration-300 cursor-pointer mb-5"
                  >
                    UAE Q2 2024, Market Watch Digest Residential Real Estate
                    Insights
                  </Link>
                  <p className="text-text2 flex justify-between items-center ">
                    <Link
                      to="/blog/market-watch-digest-residential"
                      className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium"
                    >
                      Read{" "}
                      <KeyboardArrowRightOutlined className="text-primary" />
                    </Link>{" "}
                    <span className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium">
                      Share
                      <img src={share} alt="" className="w-4 ml-1.5" />
                    </span>
                  </p>
                </div>
                <Link
                  to="/blog/market-watch-digest-residential"
                  className="sm:w-2/5 h-full order-1 sm:order-2"
                >
                  <img
                    src={house1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div className="max-w-[400px] sm:max-w-max mx-auto rounded-[20px] bg-white overflow-hidden flex flex-col sm:flex-row items-center">
                <div className="py-6 px-5 sm:w-3/5 order-2 sm:order-1">
                  <p className="text-text2 flex justify-between items-center mb-6">
                    <span className="text-sm">June 25, 2024</span>{" "}
                    <span className="px-6 py-1 border border-border1 text-xs rounded-full">
                      Decor
                    </span>
                  </p>
                  <Link
                    to="/blog/market-watch-digest-residential"
                    className="inline-block  sm:text-lg font-medium text-text1 hover:text-primary duration-300 cursor-pointer mb-5"
                  >
                    UAE Q2 2024, Market Watch Digest Residential Real Estate
                    Insights
                  </Link>
                  <p className="text-text2 flex justify-between items-center ">
                    <Link
                      to="/blog/market-watch-digest-residential"
                      className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium"
                    >
                      Read{" "}
                      <KeyboardArrowRightOutlined className="text-primary" />
                    </Link>{" "}
                    <span className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium">
                      Share
                      <img src={share} alt="" className="w-4 ml-1.5" />
                    </span>
                  </p>
                </div>
                <Link
                  to="/blog/market-watch-digest-residential"
                  className="sm:w-2/5 h-full order-1 sm:order-2"
                >
                  <img
                    src={house1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div className="max-w-[400px] sm:max-w-max mx-auto rounded-[20px] bg-white overflow-hidden flex flex-col sm:flex-row items-center">
                <div className="py-6 px-5 sm:w-3/5 order-2 sm:order-1">
                  <p className="text-text2 flex justify-between items-center mb-6">
                    <span className="text-sm">June 25, 2024</span>{" "}
                    <span className="px-6 py-1 border border-border1 text-xs rounded-full">
                      Decor
                    </span>
                  </p>
                  <Link
                    to="/blog/market-watch-digest-residential"
                    className="inline-block  sm:text-lg font-medium text-text1 hover:text-primary duration-300 cursor-pointer mb-5"
                  >
                    UAE Q2 2024, Market Watch Digest Residential Real Estate
                    Insights
                  </Link>
                  <p className="text-text2 flex justify-between items-center ">
                    <Link
                      to="/blog/market-watch-digest-residential"
                      className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium"
                    >
                      Read{" "}
                      <KeyboardArrowRightOutlined className="text-primary" />
                    </Link>{" "}
                    <span className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium">
                      Share
                      <img src={share} alt="" className="w-4 ml-1.5" />
                    </span>
                  </p>
                </div>
                <Link
                  to="/blog/market-watch-digest-residential"
                  className="sm:w-2/5 h-full order-1 sm:order-2"
                >
                  <img
                    src={house1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Investor’s Guides */}
        <div className=" mb-20">
          <h4 className="text-3xl font-medium text-text1 mb-3">
            Investor’s Guides
          </h4>
          <p className="sm:text-lg text-text1">
            Your Friendly Guide to Finding a Home & Living the Dream in the
            Emirates.
          </p>
          <div className="mt-8 sm:mt-10">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="py-6 px-4 lg:px-6 bg-[#FFD2BF] rounded-[20px] flex items-center justify-between gap-4">
                <div>
                  <p className="text-xl text-[#333333] mb-3">Visa</p>
                  <p className="text-lg lg:text-2xl text-[#333333] font-medium">
                    Golden Visa for Investors
                  </p>
                </div>
                <div className="">
                  <img
                    src={arrowCircle}
                    alt=""
                    className="min-w-10 lg:min-w-[50px] w-10 lg:w-[50px] h-full"
                  />
                </div>
              </div>
              <div className="py-6 px-4 lg:px-6 bg-[#FFBFF9] rounded-[20px] flex items-center justify-between gap-4">
                <div>
                  <p className="text-xl text-[#333333] mb-3">
                    Investor
                  </p>
                  <p className="text-lg lg:text-2xl text-[#333333] font-medium">
                    {" "}
                    Investing in Real Estate
                  </p>
                </div>
                <div className="">
                  <img
                    src={arrowCircle}
                    alt=""
                    className="min-w-10 lg:min-w-[50px] w-10 lg:w-[50px] h-full"
                  />
                </div>
              </div>
              <div className="py-6 px-4 lg:px-6 bg-[#BFD5FF] rounded-[20px] flex items-center justify-between gap-4">
                <div>
                  <p className="text-xl text-[#333333] mb-3">Guide </p>
                  <p className="text-lg lg:text-2xl text-[#333333] font-medium">
                    Buying Off-plan Vs. Secondary
                  </p>
                </div>
                <div className="">
                  <img
                    src={arrowCircle}
                    alt=""
                    className="min-w-10 lg:min-w-[50px] w-10 lg:w-[50px] h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Picks */}
        <div>
          <div className="flex lg:gap-7 gap-2 xs:gap-4 justify-center mb-11 flex-wrap *:duration-300">
            <button className="px-6 py-1.5 border font-medium text-base rounded-full bg-primary border-primary text-white">
              Top Picks
            </button>
            <button className="px-6 py-1.5 border text-text2 text-base rounded-full border-border1 hover:border-primary hover:text-primary">
              Lifestyle
            </button>
            <button className="px-6 py-1.5 border text-text2 text-base rounded-full border-border1 hover:border-primary hover:text-primary">
              The Guide
            </button>
            <button className="px-6 py-1.5 border text-text2 text-base rounded-full border-border1 hover:border-primary hover:text-primary">
              Where to Live
            </button>
            <button className="px-6 py-1.5 border text-text2 text-base rounded-full border-border1 hover:border-primary hover:text-primary">
              Laws
            </button>
          </div>
          <h4 className="text-3xl font-medium text-text1 mb-10 text-center">
            Top Picks
          </h4>
          <Slider {...settings}>
            <div className="px-4">
              <div className=" rounded-[20px] bg-white overflow-hidden flex flex-col justify-between ">
                <Link
                  to="/blog/market-watch-digest-residential"
                  className="h-full"
                >
                  <img
                    src={house1}
                    alt=""
                    className="w-full max-h-[192px] object-cover"
                  />
                </Link>
                <div className="px-4 py-6">
                  <p className="text-text2 flex justify-between items-center mb-4">
                    <span className="text-sm">June 25, 2024</span>{" "}
                    <span className="px-6 py-1 border border-border1 text-xs rounded-full">
                      Decor
                    </span>
                  </p>
                  <Link
                    to="/blog/market-watch-digest-residential"
                    className=" sm:text-lg font-medium text-text1 hover:text-primary duration-300 cursor-pointer"
                  >
                    UAE Q2 2024, Market Watch Digest Residential Real Estate
                    Insights
                  </Link>
                  <div className="mt-7 border-t pt-4">
                    {" "}
                    <p className="text-text2 flex justify-between items-center ">
                      <Link
                        to="/blog/market-watch-digest-residential"
                        className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium"
                      >
                        Read{" "}
                        <KeyboardArrowRightOutlined className="text-primary" />
                      </Link>{" "}
                      <span className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium">
                        Share
                        <img src={share} alt="" className="w-4 ml-1.5" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className=" rounded-[20px] bg-white overflow-hidden flex flex-col justify-between ">
                <Link
                  to="/blog/market-watch-digest-residential"
                  className="h-full"
                >
                  <img
                    src={house1}
                    alt=""
                    className="w-full max-h-[192px] object-cover"
                  />
                </Link>
                <div className="px-4 py-6">
                  <p className="text-text2 flex justify-between items-center mb-4">
                    <span className="text-sm">June 25, 2024</span>{" "}
                    <span className="px-6 py-1 border border-border1 text-xs rounded-full">
                      Decor
                    </span>
                  </p>
                  <Link
                    to="/blog/market-watch-digest-residential"
                    className=" sm:text-lg font-medium text-text1 hover:text-primary duration-300 cursor-pointer"
                  >
                    UAE Q2 2024, Market Watch Digest Residential Real Estate
                    Insights
                  </Link>
                  <div className="mt-7 border-t pt-4">
                    {" "}
                    <p className="text-text2 flex justify-between items-center ">
                      <Link
                        to="/blog/market-watch-digest-residential"
                        className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium"
                      >
                        Read{" "}
                        <KeyboardArrowRightOutlined className="text-primary" />
                      </Link>{" "}
                      <span className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium">
                        Share
                        <img src={share} alt="" className="w-4 ml-1.5" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className=" rounded-[20px] bg-white overflow-hidden flex flex-col justify-between ">
                <Link
                  to="/blog/market-watch-digest-residential"
                  className="h-full"
                >
                  <img
                    src={house1}
                    alt=""
                    className="w-full max-h-[192px] object-cover"
                  />
                </Link>
                <div className="px-4 py-6">
                  <p className="text-text2 flex justify-between items-center mb-4">
                    <span className="text-sm">June 25, 2024</span>{" "}
                    <span className="px-6 py-1 border border-border1 text-xs rounded-full">
                      Decor
                    </span>
                  </p>
                  <Link
                    to="/blog/market-watch-digest-residential"
                    className=" sm:text-lg font-medium text-text1 hover:text-primary duration-300 cursor-pointer"
                  >
                    UAE Q2 2024, Market Watch Digest Residential Real Estate
                    Insights
                  </Link>
                  <div className="mt-7 border-t pt-4">
                    {" "}
                    <p className="text-text2 flex justify-between items-center ">
                      <Link
                        to="/blog/market-watch-digest-residential"
                        className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium"
                      >
                        Read{" "}
                        <KeyboardArrowRightOutlined className="text-primary" />
                      </Link>{" "}
                      <span className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium">
                        Share
                        <img src={share} alt="" className="w-4 ml-1.5" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className=" rounded-[20px] bg-white overflow-hidden flex flex-col justify-between ">
                <Link
                  to="/blog/market-watch-digest-residential"
                  className="h-full"
                >
                  <img
                    src={house1}
                    alt=""
                    className="w-full max-h-[192px] object-cover"
                  />
                </Link>
                <div className="px-4 py-6">
                  <p className="text-text2 flex justify-between items-center mb-4">
                    <span className="text-sm">June 25, 2024</span>{" "}
                    <span className="px-6 py-1 border border-border1 text-xs rounded-full">
                      Decor
                    </span>
                  </p>
                  <Link
                    to="/blog/market-watch-digest-residential"
                    className=" sm:text-lg font-medium text-text1 hover:text-primary duration-300 cursor-pointer"
                  >
                    UAE Q2 2024, Market Watch Digest Residential Real Estate
                    Insights
                  </Link>
                  <div className="mt-7 border-t pt-4">
                    {" "}
                    <p className="text-text2 flex justify-between items-center ">
                      <Link
                        to="/blog/market-watch-digest-residential"
                        className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium"
                      >
                        Read{" "}
                        <KeyboardArrowRightOutlined className="text-primary" />
                      </Link>{" "}
                      <span className="flex items-center hover:text-primary text-sm duration-300 cursor-pointer font-medium">
                        Share
                        <img src={share} alt="" className="w-4 ml-1.5" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className="text-center mt-16">
            <button className="border border-border1 rounded-full py-2 px-8 text-lg text-text2 inline-block hover:border-primary hover:bg-primary hover:text-white duration-300">
              View All Articles
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <DownloadApp />
      </div>
    </div>
  );
};

export default Blog;
