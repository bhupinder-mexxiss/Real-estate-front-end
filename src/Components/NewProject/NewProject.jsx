import React, { useRef } from "react";
import house1 from "../../assets/images/house1.png";
import house2 from "../../assets/images/house2.png";
import house3 from "../../assets/images/house3.png";
import location_pinIcon from "../../assets/icons/location_pinIcon.png";
import userIcon from "../../assets/icons/userIcon.png";
import emailIcon from "../../assets/icons/emailIcon.png";
import whatsappIcon from "../../assets/icons/whatsappIcon.png";
import "./newProject.css";
import Slider from "react-slick";

const NewProject = () => {
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    centerMode: true,
    centerPadding: "80px",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "30px",
          dots: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          dots: true,
          slidesToShow: 1,
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
    <div className="newProject sm:pb-16 py-12 sm:pt-20">
      <div className="container mx-auto">
        <h4 className="text-[22px] sm:text-2xl  md:text-3xl lg:text-[38px] text-text1 font-medium text-center mb-3 lg:mb-5">
          Explore new projects in the <span className="title_Border pb-2">UAE</span>
        </h4>
        <p className="text-center text-base lg:text-lg text-text3">
          Discover the latest off-plan properties and be informed.
        </p>
        <div className="box hidden xl:grid grid-cols-3 my-12 gap-4 xl:gap-[30px] *:duration-300 ">
          <div className="card p-3 pb-6 bg-white hover:bg-primary rounded-3xl">
            <div className="max-h-[270px] rounded-3xl overflow-hidden card_Thumb">
              <img src={house1} alt="" className="w-full" />
            </div>
            <div className="pt-6">
              <div className="flex items-center justify-between">
                <h6 className="text-xl text-text1 font-medium">One B Tower</h6>
                <span className="text-xl text-primary">1,60,000 AED</span>
              </div>
              <div className="mt-5 mb-6">
                <p className="flex items-center mb-5">
                  <span>
                    <img
                      src={location_pinIcon}
                      alt=""
                      className="w-[17px] mr-5"
                    />
                  </span>
                  Dubai, Mina Rashid
                </p>
                <p className="flex items-center">
                  <span>
                    <img src={userIcon} alt="" className="w-[17px] mr-5" />
                  </span>
                  Emaar Properties
                </p>
              </div>
              <div className="flex gap-5">
                <button className="w-full border-2 border-primary rounded-full flex items-center justify-center text-primary font-medium py-[13px]">
                  <img src={emailIcon} alt="" className="w-[17px] mr-1" />
                  Email
                </button>
                <button className="w-full border-2 border-primary rounded-full flex items-center justify-center text-primary font-medium py-[13px]">
                  <img src={whatsappIcon} alt="" className="w-[17px] mr-1" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
          <div className="card p-3 pb-6 bg-white hover:bg-primary rounded-3xl">
            <div className="max-h-[270px] rounded-3xl overflow-hidden card_Thumb">
              <img src={house2} alt="" className="w-full" />
            </div>
            <div className="pt-6">
              <div className="flex items-center justify-between">
                <h6 className="text-xl text-text1 font-medium">Marina Views</h6>
                <span className="text-xl text-primary">1,60,000 AED</span>
              </div>
              <div className="mt-5 mb-6">
                <p className="flex items-center mb-5">
                  <span>
                    <img
                      src={location_pinIcon}
                      alt=""
                      className="w-[17px] mr-5"
                    />
                  </span>
                  Dubai, Mina Rashid
                </p>
                <p className="flex items-center">
                  <span>
                    <img src={userIcon} alt="" className="w-[17px] mr-5" />
                  </span>
                  Emaar Properties
                </p>
              </div>
              <div className="flex gap-5">
                <button className="w-full border-2 border-primary rounded-full flex items-center justify-center text-primary font-medium py-[13px]">
                  <img src={emailIcon} alt="" className="w-[17px] mr-1" />
                  Email
                </button>
                <button className="w-full border-2 border-primary rounded-full flex items-center justify-center text-primary font-medium py-[13px]">
                  <img src={whatsappIcon} alt="" className="w-[17px] mr-1" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
          <div className="card p-3 pb-6 bg-white hover:bg-primary rounded-3xl">
            <div className="max-h-[270px] rounded-3xl overflow-hidden card_Thumb">
              <img src={house3} alt="" className="w-full" />
            </div>
            <div className="pt-6">
              <div className="flex items-center justify-between">
                <h6 className="text-xl text-text1 font-medium">
                  Grand Club Resort
                </h6>
                <span className="text-xl text-primary">1,60,000 AED</span>
              </div>
              <div className="mt-5 mb-6">
                <p className="flex items-center mb-5">
                  <span>
                    <img
                      src={location_pinIcon}
                      alt=""
                      className="w-[17px] mr-5"
                    />
                  </span>
                  Dubai, Mina Rashid
                </p>
                <p className="flex items-center">
                  <span>
                    <img src={userIcon} alt="" className="w-[17px] mr-5" />
                  </span>
                  Emaar Properties
                </p>
              </div>
              <div className="flex gap-5">
                <button className="w-full border-2 border-primary rounded-full flex items-center justify-center text-primary font-medium py-[13px]">
                  <img src={emailIcon} alt="" className="w-[17px] mr-1" />
                  Email
                </button>
                <button className="w-full border-2 border-primary rounded-full flex items-center justify-center text-primary font-medium py-[13px]">
                  <img src={whatsappIcon} alt="" className="w-[17px] mr-1" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="box mt-6 sm:mt-12 mb-10 sm:mb-14 *:duration-300 block xl:hidden">
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef = slider;
            }}
          >
            <div>
              <div className="card mx-3 p-3 pb-6 bg-white hover:bg-primary rounded-3xl">
                <div className="max-h-[270px] rounded-3xl overflow-hidden card_Thumb">
                  <img src={house1} alt="" className="w-full" />
                </div>
                <div className="pt-6">
                  <div className="flex items-center text-sm md:text-base justify-between">
                    <h6 className="text-base xs:text-lg lg:text-xl text-text1 font-medium">
                      One B Tower
                    </h6>
                    <span className="text-base xs:text-lg lg:text-xl text-primary">
                      1,60,000 AED
                    </span>
                  </div>
                  <div className="my-3 sm:mt-5 sm:mb-6">
                    <p className="flex items-center text-sm md:text-base mb-3 md::mb-5">
                      <span>
                        <img
                          src={location_pinIcon}
                          alt=""
                          className="w-[15px] lg:w-[17px] mr-2 sm:mr-5"
                        />
                      </span>
                      Dubai, Mina Rashid
                    </p>
                    <p className="flex items-center text-sm md:text-base">
                      <span>
                        <img
                          src={userIcon}
                          alt=""
                          className="w-3 sm:w-[15px] lg:w-[17px] mr-2 sm:mr-5"
                        />
                      </span>
                      Emaar Properties
                    </p>
                  </div>
                  <div className="flex gap-2 sm:gap-5">
                    <button className="w-full border-2 border-primary rounded-full text-sm lg:text-base flex items-center justify-center text-primary font-medium py-2.5 lg:py-[13px]">
                      <img
                        src={emailIcon}
                        alt=""
                        className="w-[15px] lg:w-[17px] mr-1"
                      />
                      Email
                    </button>
                    <button className="w-full border-2 border-primary rounded-full text-sm lg:text-base flex items-center justify-center text-primary font-medium py-2.5 lg:py-[13px]">
                      <img
                        src={whatsappIcon}
                        alt=""
                        className="w-[15px] lg:w-[17px] mr-1"
                      />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card mx-3 p-3 pb-6 bg-white hover:bg-primary rounded-3xl">
                <div className="max-h-[270px] rounded-3xl overflow-hidden card_Thumb">
                  <img src={house2} alt="" className="w-full" />
                </div>
                <div className="pt-6">
                  <div className="flex items-center text-sm md:text-base justify-between">
                    <h6 className="text-base xs:text-lg lg:text-xl text-text1 font-medium">
                      Marina Views
                    </h6>
                    <span className="text-base xs:text-lg lg:text-xl text-primary">
                      1,60,000 AED
                    </span>
                  </div>
                  <div className="my-3 sm:mt-5 sm:mb-6">
                    <p className="flex items-center text-sm md:text-base mb-3 md::mb-5">
                      <span>
                        <img
                          src={location_pinIcon}
                          alt=""
                          className="w-[15px] lg:w-[17px] mr-2 sm:mr-5"
                        />
                      </span>
                      Dubai, Mina Rashid
                    </p>
                    <p className="flex items-center text-sm md:text-base">
                      <span>
                        <img
                          src={userIcon}
                          alt=""
                          className="w-3 sm:w-[15px] lg:w-[17px] mr-2 sm:mr-5"
                        />
                      </span>
                      Emaar Properties
                    </p>
                  </div>
                  <div className="flex gap-2 sm:gap-5">
                    <button className="w-full border-2 border-primary rounded-full text-sm lg:text-base flex items-center justify-center text-primary font-medium py-2.5 lg:py-[13px]">
                      <img
                        src={emailIcon}
                        alt=""
                        className="w-[15px] lg:w-[17px] mr-1"
                      />
                      Email
                    </button>
                    <button className="w-full border-2 border-primary rounded-full text-sm lg:text-base flex items-center justify-center text-primary font-medium py-2.5 lg:py-[13px]">
                      <img
                        src={whatsappIcon}
                        alt=""
                        className="w-[15px] lg:w-[17px] mr-1"
                      />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card mx-3 p-3 pb-6 bg-white hover:bg-primary rounded-3xl">
                <div className="max-h-[270px] rounded-3xl overflow-hidden card_Thumb">
                  <img src={house3} alt="" className="w-full" />
                </div>
                <div className="pt-6">
                  <div className="flex items-center text-sm md:text-base justify-between">
                    <h6 className="text-base xs:text-lg lg:text-xl text-text1 font-medium">
                      Grand Club Resort
                    </h6>
                    <span className="text-base xs:text-lg lg:text-xl text-primary">
                      1,60,000 AED
                    </span>
                  </div>
                  <div className="my-3 sm:mt-5 sm:mb-6">
                    <p className="flex items-center text-sm md:text-base mb-3 md::mb-5">
                      <span>
                        <img
                          src={location_pinIcon}
                          alt=""
                          className="w-[15px] lg:w-[17px] mr-2 sm:mr-5"
                        />
                      </span>
                      Dubai, Mina Rashid
                    </p>
                    <p className="flex items-center text-sm md:text-base">
                      <span>
                        <img
                          src={userIcon}
                          alt=""
                          className="w-3 sm:w-[15px] lg:w-[17px] mr-2 sm:mr-5"
                        />
                      </span>
                      Emaar Properties
                    </p>
                  </div>
                  <div className="flex gap-2 sm:gap-5">
                    <button className="w-full border-2 border-primary rounded-full text-sm lg:text-base flex items-center justify-center text-primary font-medium py-2.5 lg:py-[13px]">
                      <img
                        src={emailIcon}
                        alt=""
                        className="w-[15px] lg:w-[17px] mr-1"
                      />
                      Email
                    </button>
                    <button className="w-full border-2 border-primary rounded-full text-sm lg:text-base flex items-center justify-center text-primary font-medium py-2.5 lg:py-[13px]">
                      <img
                        src={whatsappIcon}
                        alt=""
                        className="w-[15px] lg:w-[17px] mr-1"
                      />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="text-center">
          <button className="border border-border1 rounded-full py-2 px-8 text-base sm:text-lg md:text-xl text-text2 inline-block hover:border-primary hover:bg-primary hover:text-white duration-300">
            See All New Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
