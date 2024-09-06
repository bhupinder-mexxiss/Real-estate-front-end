import React, { useRef } from "react";
import Slider from "react-slick";
import house4 from "../../assets/images/house4.png";
import house5 from "../../assets/images/house5.png";
import house6 from "../../assets/images/house6.png";
import house7 from "../../assets/images/house7.png";
import "./explore.css";
import { Link } from "react-router-dom";

const Explore = () => {
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
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
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <div className="explore">
      <div className="container mx-auto">
        <div className="md:max-w-[660px] mx-auto mb-10 lg:mb-14">
          <h4 className="text-[22px] sm:text-2xl  md:text-3xl lg:text-[38px] text-text1 font-medium text-center mb-3 lg:mb-5">
            Explore the UAE <span className="title_Border pb-2">market</span>
          </h4>
          <p className="text-center text-base lg:text-lg text-text3">
            Dive deep into the UAE’s real estate market with prices, transaction
            histories and community insights to help you make an educated
            decision.
          </p>
        </div>
      </div>
      <div className=" block select-none">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          <div>
            <div className="mx-2 box relative">
              <img src={house4} alt="" className="w-full" />
              <Link className="box_inner absolute left-0 top-0 bg-[#0000008c] w-full h-full flex justify-center items-center">
                <span className="text-3xl font-medium text-white">Dubai</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="mx-2 box relative">
              <img src={house5} alt="" className="w-full" />
              <Link className="box_inner absolute left-0 top-0 bg-[#0000008c] w-full h-full flex justify-center items-center">
                <span className="text-3xl font-medium text-white">
                  Abu Dhabi
                </span>
              </Link>
            </div>
          </div>
          <div>
            <div className="mx-2 box relative">
              <img src={house6} alt="" className="w-full" />
              <Link className="box_inner absolute left-0 top-0 bg-[#0000008c] w-full h-full flex justify-center items-center">
                <span className="text-3xl font-medium text-white">Sharjah</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="mx-2 box relative">
              <img src={house7} alt="" className="w-full" />
              <Link className="box_inner absolute left-0 top-0 bg-[#0000008c] w-full h-full flex justify-center items-center">
                <span className="text-3xl font-medium text-white">Ajman</span>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Explore;
