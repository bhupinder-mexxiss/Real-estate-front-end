import React, { useRef } from "react";
import Slider from "react-slick";
import house4 from "../../assets/images/house4.png";
import house5 from "../../assets/images/house5.png";
import house6 from "../../assets/images/house6.png";
import house7 from "../../assets/images/house7.png";
import "./explore.css";

const Explore = () => {
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
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
        <div className="md:max-w-[660px] mx-auto mb-10 lg:mb-16 xl:mb-24">
          <h4 className="text-[22px] sm:text-2xl  md:text-3xl lg:text-[38px] text-text1 font-medium text-center mb-3 lg:mb-5">
            Explore the UAE <span className="title_Border pb-2">market</span>
          </h4>
          <p className="text-center text-base lg:text-lg text-text3">
            Dive deep into the UAE’s real estate market with prices, transaction
            histories and community insights to help you make an educated
            decision.
          </p>
        </div>
        <div></div>
      </div>
      <div className="md:grid grid-cols-4 hidden ">
        <div>
          <div className="mr-[18px] lg:mr-[36px]">
            <img src={house4} alt="" className="w-full" />
          </div>
        </div>
        <div>
          <div className="mr-[12px] lg:mr-[23px] ml-1.5 lg:ml-[13px]">
            <img src={house5} alt="" className="w-full" />
          </div>
        </div>
        <div>
          <div className="ml-[12px] lg:ml-[23px] mr-1.5 lg:mr-[13px]">
            <img src={house6} alt="" className="w-full" />
          </div>
        </div>
        <div>
          <div className="ml-[18px] lg:ml-[36px]">
            <img src={house7} alt="" className="w-full" />
          </div>
        </div>
      </div>
      <div className=" block md:hidden">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          <div>
            <div className="mx-2">
              <img src={house4} alt="" className="w-full" />
            </div>
          </div>
          <div>
            <div className="mx-2">
              <img src={house5} alt="" className="w-full" />
            </div>
          </div>
          <div>
            <div className="mx-2">
              <img src={house6} alt="" className="w-full" />
            </div>
          </div>
          <div>
            <div className="mx-2">
              <img src={house7} alt="" className="w-full" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Explore;
