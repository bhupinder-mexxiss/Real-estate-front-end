import React, { useRef, useState } from "react";
import bannerImg from "../../assets/images/mortgageBg.png";
import mortage1 from "../../assets/images/mortage1.png";
import agent1 from "../../assets/images/agent1.png";
import faq from "../../assets/images/faq.png";
import super1 from "../../assets/icons/super1.png";
import mortgage1 from "../../assets/icons/mortgage1.png";
import mortgage2 from "../../assets/icons/mortgage2.png";
import mortgage3 from "../../assets/icons/mortgage3.png";
import mortgage4 from "../../assets/icons/mortgage4.png";
import mortgage5 from "../../assets/icons/mortgage5.png";
import mortgage6 from "../../assets/icons/mortgage6.png";
import mortgage7 from "../../assets/icons/mortgage7.png";
import mortgage8 from "../../assets/icons/mortgage8.png";
import quoteIcon from "../../assets/icons/quote.png";
import ProgressBar from "../../Components/utils/ProgressBar";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./mortgage.css";
import Accordion from "../../Components/utils/Accordion";
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";

const Mortgage = () => {
  const [activeTab, setActiveTab] = useState("resident");
  const [openAccordion, setOpenAccordion] = useState(0);
  let sliderRef = useRef(null);

  const handleToggle = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
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
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: "300px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 420,
        settings: {
          centerPadding: "0",
          centerMode: false,
          dots: true
        },
      },
    ],
  };
  return (
    <div className="mortgage">
      <div
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="pt-24 2xs:pt-28 pb-24 sm:pt-36 sm:pb-28 md:pt-48 md:pb-28 flex items-center banner relative"
      >
        <div className="container mx-auto relative z-0">
          <div className="">
            <h3 className=" flex flex-col">
              <span className="text-[#E2DAD7] text-[28px] 2xs:text-[34px] xs:text-4xl sm:text-[50px] md:text-[70px] 2xs:leading-[50px] md:leading-[70px]">
                Get the right
              </span>
              <span className="text-[34px] 2xs:text-[44px] xs:text-5xl sm:text-[60px] md:text-[80px] lg:text-[100px] text-white leading-10 xs:leading-[60px] sm:leading-[80px] md:leading-[110px] lg:leading-[150px]">
                Mortgage for you
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="py-14 sm:py-20">
        <div>
          <div className="container mx-auto">
            <div className="lg:flex gap-0 xl:gap-10">
              <div className="lg:w-1/2 xl:w-[40%]">
                <div className="">
                  <div className="px-5 sm::px-8 lg:pr-10">
                    <p className=" mb-3.5 text-[#333333] ">Purchase price</p>
                    <ProgressBar
                      min={"370,000 AED"}
                      max={"580,000,000 AED"}
                      value={"1,200,000"}
                      percentage={50}
                    />
                  </div>
                  <div className="mt-16">
                    <p className=" mb-2 text-[#333333] ">Purchase price</p>
                    <ul className="grid grid-cols-3 bg-[#FAFAFC] rounded-sm border border-[#E6E2EC]">
                      <li
                        className={`py-2.5 px-2 xs:px-4 text-center border-[1.8px] ${
                          activeTab === "national"
                            ? "text-text1 border-primary rounded-sm bg-white"
                            : "text-text2 border-transparent"
                        }`}
                        onClick={() => setActiveTab("national")}
                      >
                        UAE National
                      </li>
                      <li
                        className={`py-2.5 px-2 xs:px-4 text-center border-[1.8px] ${
                          activeTab === "resident"
                            ? "text-text1 border-primary rounded-sm bg-white"
                            : "text-text2 border-transparent border-x-[#E6E2EC]"
                        }`}
                        onClick={() => setActiveTab("resident")}
                      >
                        UAE Resident
                      </li>
                      <li
                        className={`py-2.5 px-2 xs:px-4 text-center border-[1.8px] ${
                          activeTab === "non-resident"
                            ? "text-text1 border-primary rounded-sm bg-white"
                            : "text-text2 border-transparent"
                        }`}
                        onClick={() => setActiveTab("non-resident")}
                      >
                        Non-Resident
                      </li>
                    </ul>
                  </div>
                  <div className="mt-16 px-5 sm::px-8 lg:pr-10">
                    <p className=" mb-3.5 text-[#333333] flex items-end justify-between">
                      Down Payment{" "}
                      <span className="text-primary text-xs">20%</span>
                    </p>
                    <ProgressBar
                      min={"370,000 AED"}
                      max={"580,000,000 AED"}
                      value={"1,200,000"}
                      percentage={50}
                    />
                  </div>
                  <div className="mt-16 px-5 sm::px-8 lg:pr-10">
                    <p className=" mb-3.5 text-[#333333] ">Loan Period</p>
                    <ProgressBar
                      min={"1 year"}
                      max={"25 years"}
                      value={"20"}
                      percentage={80}
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 xl:w-[60%] mt-20 lg:mt-0">
                <div className="rounded-3xl bg-white py-7 px-4 sm:px-11">
                  <p className="text-lg text-text3 font-medium mb-3">
                    Estimate your monthly mortgage payment
                  </p>
                  <div className="flex gap-6 sm:gap-14 mb-6">
                    <div>
                      <p className="text-text3 mb-1">Monthly payment</p>
                      <span className="text-text3 text-xl font-medium">
                        5,035 AED
                      </span>
                    </div>
                    <div>
                      <p className="text-text3 mb-1">with interest rate of</p>
                      <span className="text-text3 text-xl font-medium">
                        9.45%
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="w-full text-center text-primary border border-primary rounded-full py-2 px-6 md:text-xl hover:bg-primary hover:text-white duration-300">
                      View upfront costs
                    </button>
                    <button className="w-full text-center text-white bg-primary border border-primary rounded-full py-2 px-6 md:text-xl hover:bg-white hover:text-primary duration-300 mt-4">
                      Get a mortgage quote
                    </button>
                  </div>
                </div>
                <div className="rounded-3xl bg-white py-6 px-4 sm:px-9 mt-4 relative">
                  <img
                    src={mortage1}
                    alt=""
                    className="absolute 2xl:h-full right-0 bottom-0 w-[180px] md:w-[200px] 2xl:w-auto hidden xs:inline-block"
                  />
                  <p className="text-lg md:text-xl text-text3 mb-3">
                    We found{" "}
                    <span className="font-medium">30,175 properties</span>{" "}
                    within your budget.
                  </p>
                  <button className=" text-center text-primary border border-primary rounded-full py-2 px-8 text-lg hover:bg-primary hover:text-white duration-300 w-full xs:w-auto">
                    View Properties
                  </button>
                </div>
              </div>
            </div>

            {/* Why thousands of home buyers  */}
            <div className="mt-14 sm:mt-24">
              <h6 className="text-[22px] xs:text-[26px] sm:text-3xl text-text1 font-medium mb-10">
                Why thousands of home buyers trust us with their mortgage{" "}
                <span className="title_Border pb-2">needs</span>
              </h6>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-[30px]">
                <div className="row-span-2 rounded-3xl px-6 py-6 bg-white flex items-center">
                  <div>
                    <div>
                      <span className="w-[70px] h-[70px] flex items-center justify-center bg-[#00858E14] rounded-full">
                        <img src={super1} alt="" className=" w-8" />
                      </span>
                    </div>
                    <h5 className="text-xl md:text-2xl text-text3 my-5 font-medium">
                      We work for you, Not the bank
                    </h5>
                    <p className="text-text3 mb-3 xs:mb-5 text-sm xs:text-base">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                    <Link className="text-primary font-medium text-sm xs:text-base pb-0.5 border-b border-primary">
                      Get a Mortgage Quote
                    </Link>
                  </div>
                </div>
                <div className="rounded-3xl px-6 py-6 bg-white shadow-[10px_10px_30px_0px_#0000001F]">
                  <div className="flex items-center gap-[22px]">
                    <span className="w-[70px] h-[70px] flex items-center justify-center bg-[#00858E14] rounded-full">
                      <img src={mortgage1} alt="" className=" w-8" />
                    </span>
                    <span className="text-[24px] text-primary font-medium">
                      10 minutes
                    </span>
                  </div>
                  <p className="mt-4 text-text3">
                    90% of inquiries submitted between 9 AM – 6 PM receive
                    a call within 10 minutes
                  </p>
                </div>
                <div className="rounded-3xl px-6 py-6 bg-white shadow-[10px_10px_30px_0px_#0000001F]">
                  <div className="flex items-center gap-[22px]">
                    <span className="w-[70px] h-[70px] flex items-center justify-center bg-[#00858E14] rounded-full">
                      <img src={mortgage2} alt="" className=" w-8" />
                    </span>
                    <span className="text-[24px] text-primary font-medium">
                      4.9
                    </span>
                  </div>
                  <p className="mt-4 text-text3">
                    Customer reviews from 300+ people
                  </p>
                </div>
                <div className="rounded-3xl px-6 py-6 bg-white shadow-[10px_10px_30px_0px_#0000001F]">
                  <div className="flex items-center gap-[22px]">
                    <span className="w-[70px] h-[70px] flex items-center justify-center bg-[#00858E14] rounded-full">
                      <img src={mortgage3} alt="" className=" w-8" />
                    </span>
                    <span className="text-[24px] text-primary font-medium">
                      5,000 AED
                    </span>
                  </div>
                  <p className="mt-4 text-text3">Average savings with 0 fees</p>
                </div>
                <div className="rounded-3xl px-6 py-6 bg-white shadow-[10px_10px_30px_0px_#0000001F]">
                  <div className="flex items-center gap-[22px]">
                    <span className="w-[70px] h-[70px] flex items-center justify-center bg-[#00858E14] rounded-full">
                      <img src={mortgage4} alt="" className=" w-8" />
                    </span>
                    <span className="text-[24px] text-primary font-medium">
                      100,000+
                    </span>
                  </div>
                  <p className="mt-4 text-text3">Happy clients we served</p>
                </div>
              </div>
            </div>

            {/* 6 steps to get your place */}
            <div className="mt-14 sm:mt-24">
              <h6 className=" text-[22px] xs:text-[26px] sm:text-3xl text-text1 font-medium mb-6 md:mb-10 text-center">
                6 steps to get your place
              </h6>
              <div className="relative md:px-5 group">
              <button
                className="hidden md:inline-block w-8 h-8 bg-primary rounded-full text-white opacity-30 absolute top-1/2 -translate-y-1/2 z-10 -left-2 hover:!opacity-100 group-hover:opacity-60 duration-300"
                onClick={() => previous()}
              >
                <KeyboardArrowLeftOutlined />
              </button>
                <Slider {...settings} ref={sliderRef}>
                  <div className="px-4">
                    <div className="bg-white rounded-3xl overflow-hidden relative md:min-h-[300px]">
                      <span className="w-[80px] xs:w-[100px] h-[80px] xs:h-[100px] flex items-center justify-center bg-[#00858E14] rounded-full text-3xl text-primary font-medium text-center absolute -right-4 -top-4">
                        <img
                          src={mortgage5}
                          alt=""
                          className="w-10 xs:w-[56px]"
                        />
                      </span>
                      <div className="flex items-center gap-[22px] pt-5 pl-6 mb-4">
                        <span className="w-[70px] h-[70px] flex items-center justify-center bg-[#00858E14] rounded-full text-3xl text-primary font-medium text-center">
                          01
                        </span>
                      </div>
                      <div className=" pl-7 pr-4 pb-9">
                        <p className="text-[22px] text-text3 font-medium mb-1.5">
                          Planning
                        </p>
                        <p className="text-text3 text-sm">
                          Start by saving for your deposit: 15% for locals, 20%
                          for expats, and 40% for non-residents or second
                          property buyers. Remember to budget for extra costs
                          like agent fees (2%), transfer fees (4%), and other
                          expenses such as trustee office, mortgage
                          registration, and valuation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="bg-white rounded-3xl overflow-hidden relative md:min-h-[300px]">
                      <span className="w-[80px] xs:w-[100px] h-[80px] xs:h-[100px] flex items-center justify-center bg-[#00858E14] rounded-full text-3xl text-primary font-medium text-center absolute -right-4 -top-4">
                        <img
                          src={mortgage6}
                          alt=""
                          className="w-10 xs:w-[56px]"
                        />
                      </span>
                      <div className="flex items-center gap-[22px] pt-5 pl-6 mb-4">
                        <span className="w-[70px] h-[70px] flex items-center justify-center bg-[#00858E14] rounded-full text-3xl text-primary font-medium text-center">
                          02
                        </span>
                      </div>
                      <div className=" pl-7 pr-4 pb-9">
                        <p className="text-[22px] text-text3 font-medium mb-1.5">
                          Get pre-approval
                        </p>
                        <p className="text-text3 text-sm">
                          We collect all the necessary details to determine your
                          borrowing limit. You receive our mortgage recommend
                          tailored to your specific financial needs. We send the
                          required documents for submission to the bank and
                          handle any queries from it on your behalf, saving you
                          the hassle.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="bg-white rounded-3xl overflow-hidden relative md:min-h-[300px]">
                      <span className="w-[80px] xs:w-[100px] h-[80px] xs:h-[100px] flex items-center justify-center bg-[#00858E14] rounded-full text-3xl text-primary font-medium text-center absolute -right-4 -top-4">
                        <img
                          src={mortgage7}
                          alt=""
                          className="w-10 xs:w-[56px]"
                        />
                      </span>
                      <div className="flex items-center gap-[22px] pt-5 pl-6 mb-4">
                        <span className="w-[70px] h-[70px] flex items-center justify-center bg-[#00858E14] rounded-full text-3xl text-primary font-medium text-center">
                          03
                        </span>
                      </div>
                      <div className=" pl-7 pr-4 pb-9">
                        <p className="text-[22px] text-text3 font-medium mb-1.5">
                          Find property
                        </p>
                        <p className="text-text3 text-sm">
                          If you're still searching for your dream home, explore
                          properties within your pre-approved range on Property
                          Finder with insights on buildings, communities, and
                          other pertinent information.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="bg-white rounded-3xl overflow-hidden relative md:min-h-[300px]">
                      <span className="w-[80px] xs:w-[100px] h-[80px] xs:h-[100px] flex items-center justify-center bg-[#00858E14] rounded-full text-3xl text-primary font-medium text-center absolute -right-4 -top-4">
                        <img
                          src={mortgage8}
                          alt=""
                          className="w-10 xs:w-[56px]"
                        />
                      </span>
                      <div className="flex items-center gap-[22px] pt-5 pl-6 mb-4">
                        <span className="w-[70px] h-[70px] flex items-center justify-center bg-[#00858E14] rounded-full text-3xl text-primary font-medium text-center">
                          04
                        </span>
                      </div>
                      <div className=" pl-7 pr-4 pb-9">
                        <p className="text-[22px] text-text3 font-medium mb-1.5">
                          Offer and valuation
                        </p>
                        <p className="text-text3 text-sm">
                          Upon finding the ideal property, make an offer. If
                          accepted, the agent will draft an MOU (Memorandum of
                          Understanding). Ensure Mortgage Finder's advisor
                          reviews it. The agent supplies all necessary documents
                          and property access details. After you pay the
                          valuation fee, we handle the rest with the lender.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              <button
                className="hidden md:inline-block w-8 h-8 bg-primary rounded-full text-white opacity-30 absolute top-1/2 -translate-y-1/2 z-10 -right-2 hover:!opacity-100 group-hover:opacity-60 duration-300"
                onClick={() => next()}
              >
                <KeyboardArrowRightOutlined />
              </button>
              </div>
            </div>
          </div>

          {/* review section */}
          <div
            style={{
              backgroundImage: `url(${bannerImg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="banner relative mt-16 sm:mt-24"
          >
            <div
              className="overflow-hidden py-16 sm:py-16 lg:py-28 reviewSec"
              style={{
                "--quote-icon": `url(${quoteIcon})`,
              }}
            >
              <Slider {...settings2}>
                <div className="px-3 sm:px-6 lg:px-10 2xl:px-14">
                  <div className="bg-[#4e4e4e2e] backdrop-blur rounded-3xl px-4 sm:px-6 xl:px-9 py-6 xl:py-12 border border-white">
                    <div className="flex items-center gap-6 mb-5">
                      <div className="w-20 h-20 rounded-full overflow-hidden">
                        <img
                          src={agent1}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium text-xl">
                          Stefan George
                        </p>
                        <p className="text-white">Gnosis</p>
                      </div>
                    </div>
                    <p className="text-white text-sm sm:text-base sm:pr-10">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu
                    </p>
                  </div>
                </div>
                <div className="px-3 sm:px-6 lg:px-10 2xl:px-14">
                  <div className="bg-[#4e4e4e2e] backdrop-blur rounded-3xl px-4 sm:px-6 xl:px-9 py-6 xl:py-12 border border-white">
                    <div className="flex items-center gap-6 mb-5">
                      <div className="w-20 h-20 rounded-full overflow-hidden">
                        <img
                          src={agent1}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium text-xl">
                          Stefan George
                        </p>
                        <p className="text-white ">Gnosis</p>
                      </div>
                    </div>
                    <p className="text-white text-sm sm:text-base sm:pr-10">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu
                    </p>
                  </div>
                </div>
                <div className="px-3 sm:px-6 lg:px-10 2xl:px-14">
                  <div className="bg-[#4e4e4e2e] backdrop-blur rounded-3xl px-4 sm:px-6 xl:px-9 py-6 xl:py-12 border border-white">
                    <div className="flex items-center gap-6 mb-5">
                      <div className="w-20 h-20 rounded-full overflow-hidden">
                        <img
                          src={agent1}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium text-xl">
                          Stefan George
                        </p>
                        <p className="text-white md:text-xl">Gnosis</p>
                      </div>
                    </div>
                    <p className="text-white text-sm sm:text-base sm:pr-10">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          {/* Frequently asked questions */}
          <div className="container mx-auto">
            <div className="mt-14 sm:mt-24">
              <h6 className=" text-[22px] xs:text-[26px] sm:text-3xl text-text1 font-medium mb-10 text-center">
                Frequently asked questions
              </h6>
              <div className="lg:flex gap-14">
                <div className="w-2/5 hidden lg:block">
                  <div>
                    <img src={faq} alt="" className="w-full" />
                  </div>
                </div>
                <div className="lg:w-3/5">
                  <div>
                    <Accordion
                      title="What documents are required to get pre-approved?"
                      isOpen={openAccordion === 0}
                      toggleAccordion={() => handleToggle(0)}
                    >
                      <p className="text-[#4C4B4E] text-sm sm:text-base">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim.
                      </p>
                    </Accordion>
                    <Accordion
                      title="Which bank should I choose?"
                      isOpen={openAccordion === 1}
                      toggleAccordion={() => handleToggle(1)}
                    >
                      <p className="text-[#4C4B4E] text-sm sm:text-base">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim.
                      </p>
                    </Accordion>
                    <Accordion
                      title="Why might I not qualified for a mortgage?"
                      isOpen={openAccordion === 2}
                      toggleAccordion={() => handleToggle(2)}
                    >
                      <p className="text-[#4C4B4E] text-sm sm:text-base">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim.
                      </p>
                    </Accordion>
                    <Accordion
                      title="Which mortgage options can Mortgage Finder help with?"
                      isOpen={openAccordion === 3}
                      toggleAccordion={() => handleToggle(3)}
                    >
                      <p className="text-[#4C4B4E] text-sm sm:text-base">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim.
                      </p>
                    </Accordion>
                    <Accordion
                      title="Should I get life and building insurances?"
                      isOpen={openAccordion === 4}
                      toggleAccordion={() => handleToggle(4)}
                    >
                      <p className="text-[#4C4B4E] text-sm sm:text-base">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim.
                      </p>
                    </Accordion>
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

export default Mortgage;
