import React, { useRef, useState } from "react";
import super1 from "../../assets/icons/super1.png";
import super2 from "../../assets/icons/super2.png";
import super3 from "../../assets/icons/super3.png";
import { Link } from "react-router-dom";
import "./Supercharge.css";
import Slider from "react-slick";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";

const Supercharge = () => {
  const [isActive, setIsActive] = useState("Rent")
  let sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          dots: true,
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
  return (
    <div className="supercharge pb-12 xs:pb-16 md:pb-20 lg:pb-28 ">
      <div className="container mx-auto">
        <h4 className="capitalize text-[22px] sm:text-2xl md:text-3xl lg:text- my-5[md:38px] text-text1 font-medium text-center mb-3 lg:mb-5">
          Supercharge your <span className="title_Border pb-2">search</span>
        </h4>
        <div className="mt-4 xs:mt-6 md:mt-9">
          <div className="flex justify-center">
            <ul className="flex gap-2 xs:gap-3 md:gap-6 *:duration-300">
              <li className={`xs:min-w-24 md:min-w-36 flex items-center justify-center text-base xs:text-lg px-5 py-1.5 rounded-full border hover:border-primary hover:text-primary cursor-pointer ${isActive === "Rent" ? "text-white hover:text-white bg-primary border border-primary font-medium" : "border-border1 text-text2 "}`} onClick={() => setIsActive("Rent")}>
                Rent
              </li>
              <li className={`xs:min-w-24 md:min-w-36 flex items-center justify-center text-base xs:text-lg px-5 py-1.5 rounded-full border hover:border-primary hover:text-primary cursor-pointer ${isActive === "Buy" ? "text-white hover:text-white bg-primary border border-primary font-medium" : "border-border1 text-text2 "}`} onClick={() => setIsActive("Buy")}>
                Buy
              </li>
              <li className={`xs:min-w-24 md:min-w-36 flex items-center justify-center text-base xs:text-lg px-5 py-1.5 rounded-full border hover:border-primary hover:text-primary cursor-pointer ${isActive === "Invest" ? "text-white hover:text-white bg-primary border border-primary font-medium" : "border-border1 text-text2 "}`} onClick={() => setIsActive("Invest")}>
                Invest
              </li>
            </ul>
          </div>
          <div className="">
            <div className="relative md:px-5 group">
              <button
                className="hidden md:inline-block w-8 h-8 bg-primary rounded-full text-white opacity-30 absolute top-1/2 -translate-y-1/2 z-10 -left-2 hover:!opacity-100 group-hover:opacity-60 duration-300"
                onClick={() => previous()}
              >
                <KeyboardArrowLeftOutlined />
              </button>
              <Slider {...settings} ref={sliderRef}>
                <div className="px-3 py-6">
                  <div className="px-4 xl:px-6 py-6 xl:py-8 bg-white rounded-3xl xl:rounded-[38px] card">
                    <div className="flex items-center gap-4 mb-2 xs:mb-5 ">
                      <span className="min-w-[60px] h-[60px] flex items-center justify-center bg-[#00858E14] rounded-full">
                        <img src={super1} alt="" className=" w-6 md:w-7" />
                      </span>
                      <h5 className="text-xl lg:text-2xl text-text3  font-medium">
                        Listings you can trust
                      </h5>
                    </div>
                    <p className="text-text3 mb-3 xs:mb-5 text-sm xs:text-base">
                      Browse the most accurate listings, validated by our team.
                    </p>
                    <Link className="text-primary font-medium text-sm xs:text-base pb-0.5 border-b border-primary">
                      Explore Verified Listings
                    </Link>
                  </div>
                </div>
                <div className="px-3 py-6">
                  <div className="px-4 xl:px-6 py-6 xl:py-8 bg-white rounded-3xl xl:rounded-[38px] card">
                    <div className="flex items-center gap-4 mb-2 xs:mb-5 ">
                      <span className="min-w-[60px] h-[60px] flex items-center justify-center bg-[#00858E14] rounded-full">
                        <img src={super2} alt="" className=" w-6 md:w-7" />
                      </span>
                      <h5 className="text-xl lg:text-2xl text-text3  font-medium">
                        Find a SuperAgent
                      </h5>
                    </div>
                    <p className="text-text3 mb-3 xs:mb-5 text-sm xs:text-base">
                      The most responsive agents with verified listings.
                    </p>
                    <Link className="text-primary font-medium text-sm xs:text-base pb-0.5 border-b border-primary">
                      Find You SuperAgent
                    </Link>
                  </div>
                </div>
                <div className="px-3 py-6">
                  <div className="px-4 xl:px-6 py-6 xl:py-8 bg-white rounded-3xl xl:rounded-[38px] card">
                    <div className="flex items-center gap-4 mb-2 xs:mb-5 ">
                      <span className="min-w-[60px] h-[60px] flex items-center justify-center bg-[#00858E14] rounded-full">
                        <img src={super3} alt="" className=" w-6 md:w-7" />
                      </span>
                      <h5 className="text-xl lg:text-2xl text-text3  font-medium">
                        Rent or buy?
                      </h5>
                    </div>
                    <p className="text-text3 mb-3 xs:mb-5 text-sm xs:text-base">
                      We’ve got the tools to help you make an empowered
                      decision.
                    </p>
                    <Link className="text-primary font-medium text-sm xs:text-base pb-0.5 border-b border-primary">
                      Try Rent vs. Buy Calculator
                    </Link>
                  </div>
                </div>
                <div className="px-3 py-6">
                  <div className="px-4 xl:px-6 py-6 xl:py-8 bg-white rounded-3xl xl:rounded-[38px] card">
                    <div className="flex items-center gap-4 mb-2 xs:mb-5 ">
                      <span className="min-w-[60px] h-[60px] flex items-center justify-center bg-[#00858E14] rounded-full">
                        <img src={super3} alt="" className=" w-6 md:w-7" />
                      </span>
                      <h5 className="text-xl lg:text-2xl text-text3  font-medium">
                        Not sure where to live?
                      </h5>
                    </div>
                    <p className="text-text3 mb-3 xs:mb-5 text-sm xs:text-base">
                      Pick the right neighborhood with DataGuru’s insights.
                    </p>
                    <Link className="text-primary font-medium text-sm xs:text-base pb-0.5 border-b border-primary">
                      Find my community
                    </Link>
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
      </div>
    </div>
  );
};

export default Supercharge;
