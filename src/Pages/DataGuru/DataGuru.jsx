import React, { useRef, useState } from "react";
import InsigntHubBg from "../../assets/images/InsigntHubBg.png";
import house1 from "../../assets/images/house1.png";
import map_img from "../../assets/images/map_img.png";
import ValueEstimator from "../../assets/images/ValueEstimator2.svg";
import map from "../../assets/images/map.svg";
import rentBuyCal from "../../assets/images/rentBuyCal.svg";
import ResidentialInsight from "../../assets/images/ResidentialInsight.svg";
import community from "../../assets/images/community.svg";
import historicalTransactions from "../../assets/images/historical-transactions.svg";
import NewProject from "../../assets/icons/NewProjects.png";
import greenAreas from "../../assets/icons/greenAreas.png";
import Slider from "react-slick";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import useHorizontalScroll from "../../Components/utils/useHorizontalScroll";

const DataGuru = () => {
  const [featureSlideIndex, setFeatureSlideIndex] = useState(0);
  const featureSliderRef = useRef(null);
  const communitySliderRef = useRef(null);
  const {
    scrollRef: communityScrollRef,
    handleMouseDown: handleCommunityMouseDown,
    handleMouseLeave: handleCommunityMouseLeave,
    handleMouseUp: handleCommunityMouseUp,
    handleMouseMove: handleCommunityMouseMove,
  } = useHorizontalScroll();

  const {
    scrollRef: subCommunityScrollRef,
    handleMouseDown: handleSubCommunityMouseDown,
    handleMouseLeave: handleSubCommunityMouseLeave,
    handleMouseUp: handleSubCommunityMouseUp,
    handleMouseMove: handleSubCommunityMouseMove,
  } = useHorizontalScroll();

  const nextFeature = () => {
    featureSliderRef.current.slickNext();
  };
  const previousFeature = () => {
    featureSliderRef.current.slickPrev();
  };

  const featureSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    afterChange: (current) => setFeatureSlideIndex(current),
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
          dots: true,
          slidesToShow: 1,
          infinite: true,
          centerMode: true,
        },
      },
    ],
  };

  const communitySettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          slidesToShow: 1,
          centerMode: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          dots: true,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="pb-16">
      <div
        style={{
          backgroundImage: `url(${InsigntHubBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="pt-24 2xs:pt-28 pb-24 sm:pt-40 sm:pb-28 flex items-center banner relative before:!bg-[#00000087]"
      >
        <div className="container mx-auto relative z-0">
          <div className="">
            <p className="text-xl sm:text-2xl text-white max-w-[830px] mb-6">
              Explore Dubai
            </p>
            <h3 className="text-white text-4xl sm:text-[50px] md:text-[70px] lg:text-[90px] sm:leading-[80px] md:leading-[100px] lg:leading-[110px]">
              DataGuru
            </h3>
            <p className="text-base sm:text-lg text-white mt-6 max-w-[630px]">
              Explore house prices, community and residential insights, to make
              informed decisions when buying or renting property in UAE.
            </p>
          </div>
        </div>
      </div>
      {/* featured */}
      <div className="featured mb-16 md:mb-24">
        <div className="container mx-auto mt-16 md:mt-24">
          <div className="flex items-center justify-between mb-8">
            <h4 className=" text-xl xs:text-[24px] sm:text-[28px] md:text-[32px] leading-8 xs:leading-[58px] text-text1 font-medium">
              Features Powered by{" "}
              <span className="title_Border pb-2 ">DataGuru</span>
            </h4>
            <div className=" md:flex gap-2 hidden">
              <button
                className={`px-2 py-1 rounded-lg duration-300 ${
                  featureSlideIndex === 0
                    ? "cursor-default opacity-50"
                    : "hover:bg-slate-100"
                }`}
                onClick={previousFeature}
                disabled={featureSlideIndex === 0}
              >
                <KeyboardArrowLeftOutlined />
              </button>
              <button
                className={`px-2 py-1 rounded-lg duration-300 ${
                  featureSlideIndex >=
                  featureSliderRef.current?.innerSlider.state.slideCount -
                    featureSettings.slidesToShow
                    ? "cursor-cursor-default opacity-50"
                    : "hover:bg-slate-100"
                }`}
                onClick={nextFeature}
                disabled={
                  featureSlideIndex >=
                  featureSliderRef.current?.innerSlider.state.slideCount -
                    featureSettings.slidesToShow
                }
              >
                <KeyboardArrowRightOutlined />
              </button>
            </div>
          </div>
          <div>
            <Slider {...featureSettings} ref={featureSliderRef}>
              <div className="px-2.5">
                <div className="py-10 px-6 bg-white rounded-3xl flex flex-col min-h-[420px]">
                  <div className="mb-6 ">
                    <img
                      src={NewProject}
                      alt=""
                      className="w-[175px] max-h-[171px] object-cover mx-auto"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-text3 font-medium mb-3">
                      New Projects
                    </p>
                    <p className="text-sm text-text3 mb-5">
                      Are you looking for new and upcoming properties? View all
                      new projects in the UAE.
                    </p>
                    <span className="text-primary font-medium">
                      Explore New Projects
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2.5">
                <div className="py-10 px-6 bg-white rounded-3xl flex flex-col min-h-[420px]">
                  <div className="mb-6 ">
                    <img
                      src={historicalTransactions}
                      alt=""
                      className="w-[175px] max-h-[171px] object-cover mx-auto"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-text3 font-medium mb-3">
                      Historical Transactions
                    </p>
                    <p className="text-sm text-text3 mb-5">
                      View transaction records in any location of Dubai.
                    </p>
                    <span className="text-primary font-medium">
                      Explore transaction history
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2.5">
                <Link to="/explore-price/map" className="py-10 px-6 bg-white rounded-3xl flex flex-col min-h-[420px]">
                  <div className="mb-6 ">
                    <img
                      src={map}
                      alt=""
                      className="w-[175px] max-h-[171px] object-cover mx-auto"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-text3 font-medium mb-3">
                      Price Map
                    </p>
                    <p className="text-sm text-text3 mb-5">
                      Not sure in which area you can afford to rent or buy? View
                      the prices by different areas.
                    </p>
                    <span className="text-primary font-medium">
                      Explore Area Price
                    </span>
                  </div>
                </Link>
              </div>
              <div className="px-2.5">
                <Link
                  to="/home-value-estimator"
                  className="py-10 px-6 bg-white rounded-3xl flex flex-col min-h-[420px]"
                >
                  <div className="mb-6 ">
                    <img
                      src={ValueEstimator}
                      alt=""
                      className="w-[175px] max-h-[171px] object-cover mx-auto"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-text3 font-medium mb-3">
                      Home Value Estimator
                    </p>
                    <p className="text-sm text-text3 mb-5">
                      Wonder about the current value of your home? Let us
                      estimate rent and sale price for you.
                    </p>
                    <span className="text-primary font-medium">
                      Calculate property value
                    </span>
                  </div>
                </Link>
              </div>
              <div className="px-2.5">
                <Link
                  to="/home-value-estimator"
                  className="py-10 px-6 bg-white rounded-3xl flex flex-col min-h-[420px]"
                >
                  <div className="mb-6 ">
                    <img
                      src={ResidentialInsight}
                      alt=""
                      className="w-[175px] max-h-[171px] object-cover mx-auto"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-text3 font-medium mb-3">
                    Residential Insights
                    </p>
                    <p className="text-sm text-text3 mb-5">
                    Want insights on towers, villas or sub-communities? Have a look at the different residential areas in the city.
                    </p>
                    <span className="text-primary font-medium">
                    Explore towers & villas
                    </span>
                  </div>
                </Link>
              </div>
              <div className="px-2.5">
                <Link
                  to="/home-value-estimator"
                  className="py-10 px-6 bg-white rounded-3xl flex flex-col min-h-[420px]"
                >
                  <div className="mb-6 ">
                    <img
                      src={community}
                      alt=""
                      className="w-[175px] max-h-[171px] object-cover mx-auto"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-text3 font-medium mb-3">
                    Community Insights
                    </p>
                    <p className="text-sm text-text3 mb-5">
                    Not sure where to live yet in the city? View more details on all the different communities.
                    </p>
                    <span className="text-primary font-medium">
                    Explore communities
                    </span>
                  </div>
                </Link>
              </div>
              <div className="px-2.5">
                <Link
                  to="/home-value-estimator"
                  className="py-10 px-6 bg-white rounded-3xl flex flex-col min-h-[420px]"
                >
                  <div className="mb-6 ">
                    <img
                      src={rentBuyCal}
                      alt=""
                      className="w-[175px] max-h-[171px] object-cover mx-auto"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-text3 font-medium mb-3">
                    Rent vs Buy Calculator
                    </p>
                    <p className="text-sm text-text3 mb-5">
                    Not sure if you want to rent or buy yet? Calculate your monthly costs with Mortgage Finder.
                    </p>
                    <span className="text-primary font-medium">
                    Explore Rent vs Buy 
                    </span>
                  </div>
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="map mb-16 md:mb-14">
        <div className="container mx-auto mt-16 md:mt-24">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl xs:text-[24px] sm:text-[28px] md:text-[32px] leading-8 xs:leading-[58px] text-text1 font-medium">
              Explore Dubai's Price{" "}
              <span className="title_Border pb-2">Map</span>
            </h4>
          </div>
          <div className="flex">
            <button className="mr-5 px-6 sm:px-8 py-2 border font-medium text-lg rounded-full bg-primary border-primary text-white">
              For Rent
            </button>
            <button className="mr-5 px-6 sm:px-8 py-2 border text-text2 text-lg rounded-full border-border1 hover:border-primary hover:text-primary">
              For Buy
            </button>
          </div>
          <div className="rounded-3xl md:rounded-[48px] mt-10 overflow-hidden">
            <img
              src={map_img}
              alt=""
              className="max-h-[552px] w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* communities */}
      <div className="communities mb-16 md:mb-14">
        <div className="container mx-auto mt-16 md:mt-24">
          <div className="flex items-center justify-between mb-8">
            <h4 className=" text-xl xs:text-[24px] sm:text-[28px] md:text-[32px] leading-8 xs:leading-[58px] text-text1 font-medium">
              Discover Popular{" "}
              <span className="title_Border pb-2">Communities</span>
            </h4>
          </div>
          <div>
            <div
              className="inline-flex overflow-y-hidden scrollHide select-none"
              ref={communityScrollRef}
              onMouseDown={handleCommunityMouseDown}
              onMouseLeave={handleCommunityMouseLeave}
              onMouseUp={handleCommunityMouseUp}
              onMouseMove={handleCommunityMouseMove}
            >
              <div className=" *:duration-300">
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center font-medium gap-1.5 rounded-full bg-primary border-primary text-white">
                  <img src={greenAreas} alt="" className="w-4" />{" "}
                  Budget-friendly
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Luxurious
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Family-friendly
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  High-rise
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Waterfront
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" /> Urban
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Suburban
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Affordable
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" /> Green
                  spaces
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Pet-friendly
                </button>
              </div>
            </div>
            <p className="text-[#040404] text-base sm:text-lg my-8 sm:my-10">
              Neighborhoods known for their lush greenery and parks. Great for
              nature lovers.
            </p>
            <div>
              <Slider {...communitySettings} ref={communitySliderRef}>
                <div className="px-2.5">
                  <div className="overflow-hidden bg-white rounded-3xl  flex flex-col ">
                    <div className="">
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[304px] object-cover h-full"
                      />
                    </div>
                    <div className="p-3 pb-5 md:pt-3 md:pb-5">
                      <p className="text-xl text-text3 font-medium mb-2.5">
                        Al Barari
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white bg-primary rounded-full px-5 py-1.5">
                          5/5
                        </span>
                        <p className="text-sm text-text3">2 review</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2.5">
                  <div className="overflow-hidden bg-white rounded-3xl  flex flex-col ">
                    <div className="">
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[304px] object-cover h-full"
                      />
                    </div>
                    <div className="p-3 pb-5 md:pt-3 md:pb-5">
                      <p className="text-xl text-text3 font-medium mb-2.5">
                        Al Barari
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white bg-primary rounded-full px-5 py-1.5">
                          5/5
                        </span>
                        <p className="text-sm text-text3">2 review</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2.5">
                  <div className="overflow-hidden bg-white rounded-3xl  flex flex-col ">
                    <div className="">
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[304px] object-cover h-full"
                      />
                    </div>
                    <div className="p-3 pb-5 md:pt-3 md:pb-5">
                      <p className="text-xl text-text3 font-medium mb-2.5">
                        Al Barari
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white bg-[#F7C55F] rounded-full px-5 py-1.5">
                          3.5/5
                        </span>
                        <p className="text-sm text-text3">2 review</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2.5">
                  <div className="overflow-hidden bg-white rounded-3xl  flex flex-col ">
                    <div className="">
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[304px] object-cover h-full"
                      />
                    </div>
                    <div className="p-3 pb-5 md:pt-3 md:pb-5">
                      <p className="text-xl text-text3 font-medium mb-2.5">
                        Al Barari
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white bg-primary rounded-full px-5 py-1.5">
                          5/5
                        </span>
                        <p className="text-sm text-text3">2 review</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2.5">
                  <div className="overflow-hidden bg-white rounded-3xl  flex flex-col ">
                    <div className="">
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[304px] object-cover h-full"
                      />
                    </div>
                    <div className="p-3 pb-5 md:pt-3 md:pb-5">
                      <p className="text-xl text-text3 font-medium mb-2.5">
                        Al Barari
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white bg-primary rounded-full px-5 py-1.5">
                          5/5
                        </span>
                        <p className="text-sm text-text3">2 review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="text-center mt-10">
              <button className="border border-border1 rounded-full py-2.5 px-10 text-lg md:text-xl text-text2 inline-block hover:border-primary hover:bg-primary hover:text-white duration-300">
                See all communities
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* sub-communities */}
      <div className="sub_communities">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h4 className="capitalize text-xl xs:text-[24px] sm:text-[28px] md:text-[32px] leading-8 xs:leading-[58px] text-text1 font-medium">
              See top buildings &{" "}
              <span className="pb-2 title_Border">sub-communities</span>
            </h4>
          </div>
          <div>
            <div
              className="inline-flex overflow-y-hidden scrollHide select-none"
              ref={subCommunityScrollRef}
              onMouseDown={handleSubCommunityMouseDown}
              onMouseLeave={handleSubCommunityMouseLeave}
              onMouseUp={handleSubCommunityMouseUp}
              onMouseMove={handleSubCommunityMouseMove}
            >
              <div className=" *:duration-300">
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center font-medium gap-1.5 rounded-full bg-primary border-primary text-white">
                  <img src={greenAreas} alt="" className="w-4" />{" "}
                  Budget-friendly
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Luxurious
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Family-friendly
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  High-rise
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Waterfront
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" /> Urban
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Suburban
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Affordable
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" /> Green
                  spaces
                </button>
                <button className="mr-5 px-6 py-2.5 text-sm border inline-flex items-center text-text2 font-medium gap-1.5 rounded-full border-border1 hover:border-primary hover:text-primary">
                  <img src={greenAreas} alt="" className="w-4 grayImg" />{" "}
                  Pet-friendly
                </button>
              </div>
            </div>
            <p className="text-[#040404] text-base sm:text-lg my-8 sm:my-10">
              People love these, and so will you! Explore the best areas in
              Dubai.
            </p>
            <div>
              <Slider {...communitySettings} ref={communitySliderRef}>
                <div className="px-2.5">
                  <div className="overflow-hidden bg-white rounded-3xl  flex flex-col ">
                    <div className="">
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[304px] object-cover h-full"
                      />
                    </div>
                    <div className="p-3 pb-5 md:pt-3 md:pb-5">
                      <p className="text-xl text-text3 font-medium mb-2.5">
                        Al Barari
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white bg-primary rounded-full px-5 py-1.5">
                          5/5
                        </span>
                        <p className="text-sm text-text3">2 review</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2.5">
                  <div className="overflow-hidden bg-white rounded-3xl  flex flex-col ">
                    <div className="">
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[304px] object-cover h-full"
                      />
                    </div>
                    <div className="p-3 pb-5 md:pt-3 md:pb-5">
                      <p className="text-xl text-text3 font-medium mb-2.5">
                        Al Barari
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white bg-primary rounded-full px-5 py-1.5">
                          5/5
                        </span>
                        <p className="text-sm text-text3">2 review</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2.5">
                  <div className="overflow-hidden bg-white rounded-3xl  flex flex-col ">
                    <div className="">
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[304px] object-cover h-full"
                      />
                    </div>
                    <div className="p-3 pb-5 md:pt-3 md:pb-5">
                      <p className="text-xl text-text3 font-medium mb-2.5">
                        Al Barari
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white bg-primary rounded-full px-5 py-1.5">
                          5/5
                        </span>
                        <p className="text-sm text-text3">2 review</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2.5">
                  <div className="overflow-hidden bg-white rounded-3xl  flex flex-col ">
                    <div className="">
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[304px] object-cover h-full"
                      />
                    </div>
                    <div className="p-3 pb-5 md:pt-3 md:pb-5">
                      <p className="text-xl text-text3 font-medium mb-2.5">
                        Al Barari
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white bg-primary rounded-full px-5 py-1.5">
                          5/5
                        </span>
                        <p className="text-sm text-text3">2 review</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2.5">
                  <div className="overflow-hidden bg-white rounded-3xl  flex flex-col ">
                    <div className="">
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[304px] object-cover h-full"
                      />
                    </div>
                    <div className="p-3 pb-5 md:pt-3 md:pb-5">
                      <p className="text-xl text-text3 font-medium mb-2.5">
                        Al Barari
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white bg-primary rounded-full px-5 py-1.5">
                          5/5
                        </span>
                        <p className="text-sm text-text3">2 review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="text-center mt-10">
              <button className="border border-border1 rounded-full py-2.5 px-10 text-lg md:text-xl text-text2 inline-block hover:border-primary hover:bg-primary hover:text-white duration-300">
                See all buildings & sub-communities
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataGuru;
