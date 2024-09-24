import React, { useEffect, useState } from "react";
import house1 from "../../assets/images/house1.png";
import house2 from "../../assets/images/house2.png";
import house3 from "../../assets/images/house3.png";
import map_img from "../../assets/images/map_img.png";
import comp1 from "../../assets/images/comp1.png";
import email from "../../assets/icons/email.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import {
  FavoriteBorderRounded,
  FavoriteRounded,
  FlagOutlined,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
  PhotoCameraOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import Slider from "react-slick";
import PhotosModal from "../../Components/Modals/PhotosModal/PhotosModal";
// import "./productDetail.css";

const NewProjectDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [favorites, setFavorites] = useState(false);

  const toggleFavorite = () => {
    setFavorites(!favorites);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
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
          dots: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-6 pb-12 productDetail">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button className=" text-text2 text-sm font-medium flex items-center">
            <KeyboardArrowLeftOutlined className="!text-2xl" /> Back{" "}
            <span className="hidden sm:inline-block">
              / Villas for sale in Dubai / Marina Views
            </span>
          </button>
          <div className="flex gap-3 md:gap-2">
            <button
              onClick={toggleFavorite}
              className="flex gap-1 items-center justify-center rounded-full md:border border-border1 cursor-pointer hover:border-primary duration-300 fav_btn py-1 md:px-3"
            >
              {favorites ? (
                <FavoriteRounded className="text-primary !text-xl" />
              ) : (
                <FavoriteBorderRounded className="text-primary !text-xl" />
              )}{" "}
              <span className="text-primary hidden md:inline-block">Save</span>
            </button>
            <button className="flex gap-1 items-center justify-center rounded-full md:border border-border1 cursor-pointer hover:border-primary duration-300 fav_btn py-1 md:px-3">
              <FlagOutlined className="text-primary !text-xl" />
              <span className="text-primary hidden md:inline-block">
                Report
              </span>
            </button>
            <button className="flex gap-1 items-center justify-center rounded-full md:border border-border1 cursor-pointer hover:border-primary duration-300 fav_btn py-1 md:px-3">
              <ShareOutlined className="text-primary !text-lg" />
              <span className="text-primary hidden md:inline-block">Share</span>
            </button>
          </div>
        </div>
        <div className="product_imgs mb-6 sm:mb-10 md:mb-16">
          <div className="hidden md:flex gap-5 2xl:gap-9">
            <div className="w-[65%] rounded-2xl overflow-hidden relative">
              <div className="h-full max-h-[487px]">
                <img
                  src={house1}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div
                className="bg-white rounded-lg border border-border1 absolute bottom-3 right-3 px-2.5 py-1 flex items-center justify-center gap-1.5 !text-text2 cursor-pointer"
                onClick={() => setOpenModal(true)}
              >
                <span>
                  <PhotoCameraOutlined />
                </span>
                13
              </div>
            </div>
            <div className="w-[35%]">
              <div className=" flex flex-col h-full gap-5 2xl:gap-9 justify-between">
                <div className=" rounded-2xl overflow-hidden">
                  <img
                    src={house2}
                    alt=""
                    className="w-full max-h-[225px] object-cover object-center"
                  />
                </div>
                <div className=" rounded-2xl overflow-hidden ">
                  <img
                    src={house3}
                    alt=""
                    className="w-full max-h-[225px] object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <Slider {...settings} className="select-none">
              <div className="h-full">
                <img
                  src={house1}
                  alt=""
                  className="w-full sm:max-h-[300px] object-cover object-center"
                />
              </div>
              <div className="h-full">
                <img
                  src={house1}
                  alt=""
                  className="w-full sm:max-h-[300px] object-cover object-center"
                />
              </div>
              <div className="h-full">
                <img
                  src={house1}
                  alt=""
                  className="w-full sm:max-h-[300px] object-cover object-center"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="xl:flex gap-9">
          <div className="xl:w-[65%]">
            <div className="product_Info ">
              <div className="product_title mb-4">
                <h4 className="text-2xl sm:text-[30px] text-text1 font-medium leading-8 mb-5">
                  Marina Views
                </h4>
                <span className="price text-xl text-text2 leading-8 inline-block">
                  Starting from 2,200,000 AED*
                </span>
              </div>
              <p className="text-sm text-text2">
                *Prices, availability, and purchase conditions may change
                frequently. Contact a representative for the latest availability
                and pricing.
              </p>
              <div className="py-3.5 px-4 rounded-2xl bg-white my-10 md:my-[60px]">
                <div className="flex items-center gap-5">
                  <img src={comp1} alt="" className="w-24 rounded-[20px]" />
                  <div>
                    <span className="text-sm text-text2 leading-4">
                      Developer
                    </span>
                    <p className="text-[26px] text-[#303030] font-medium left-5 mt-2.5 ">
                      Tiger Group
                    </p>
                  </div>
                </div>
              </div>
              <div className=" mb-8 sm:mb-10">
                <h6 className="text-2xl text-[#040404] font-medium mb-7 leading-6">
                  Key Information
                </h6>
                <div className="sm:flex">
                  <div className="sm:w-[60%]">
                    <ul className="grid grid-cols-2">
                      <li className="mb-7">
                        <span className="text-text2 text-base mb-2.5 inline-block leading-4">
                          Deliver Date
                        </span>
                        <p className="text-[#040404]">April 2029</p>
                      </li>
                      <li className="mb-7">
                        <span className="text-text2 text-base mb-2.5 inline-block leading-4">
                          Sale starts
                        </span>
                        <p className="text-[#040404]">Sale starts</p>
                      </li>
                      <li className="mb-7">
                        <span className="text-text2 text-base mb-2.5 inline-block leading-4">
                          Payment Plan
                        </span>
                        <p className="text-[#040404]">60/10/30</p>
                      </li>
                      <li className="mb-7">
                        <span className="text-text2 text-base mb-2.5 inline-block leading-4">
                          No. of buildings
                        </span>
                        <p className="text-[#040404]">2</p>
                      </li>
                      <li className="mb-7">
                        <span className="text-text2 text-base mb-2.5 inline-block leading-4">
                          Property Types
                        </span>
                        <p className="text-[#040404]">Apartment</p>
                      </li>
                      <li className="mb-7">
                        <span className="text-text2 text-base mb-2.5 inline-block leading-4">
                          Government fee
                        </span>
                        <p className="text-[#040404]">4%</p>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:w-[40%]">
                    <span className="text-text2 text-base mb-2.5 inline-block leading-4">
                      Location
                    </span>
                    <p className="text-[#040404]">
                      Dubai, Business Bay, Tiger Sky Tower
                    </p>
                    <img
                      src={map_img}
                      alt=""
                      className="mt-4 sm:max-w-[220px] rounded-xl"
                    />
                  </div>
                </div>
              </div>
              <div className=" mb-8 sm:mb-10">
                <h6 className="text-2xl text-[#040404] font-medium mb-7 leading-6">
                  Payment plan
                </h6>
                <div className="flex flex-col md:flex-row gap-1.5 md:gap-4">
                  <div className="bg-white rounded-lg md:rounded-2xl flex flex-col justify-center text-center py-4 md:py-3 px-4">
                    <p className="text-xl text-[#040404] mb-3 leading-5 font-medium">
                      28%
                    </p>
                    <p className="text-sm text-text2 mb-4 leading-4">
                      Down payment
                    </p>
                    <p className="text-xs text-text2">At sales launch</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <KeyboardArrowRightOutlined className="rotate-90 md:rotate-0 text-text2" />
                  </div>
                  <div className="bg-white rounded-lg md:rounded-2xl flex flex-col justify-center text-center py-4 md:py-3 px-4">
                    <p className="text-xl text-[#040404] mb-3 leading-5 font-medium">
                      40%
                    </p>
                    <p className="text-sm text-text2 leading-4">
                      During construction
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <KeyboardArrowRightOutlined className="rotate-90 md:rotate-0 text-text2" />
                  </div>
                  <div className="bg-white rounded-lg md:rounded-2xl flex flex-col justify-center text-center py-4 md:py-3 px-4">
                    <p className="text-xl text-[#040404] mb-3 leading-5 font-medium">
                      10%
                    </p>
                    <p className="text-sm text-text2 leading-4">On handover</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <KeyboardArrowRightOutlined className="rotate-90 md:rotate-0 text-text2" />
                  </div>
                  <div className="bg-white rounded-lg md:rounded-2xl flex flex-col justify-center text-center py-4 md:py-3 px-4">
                    <p className="text-xl text-[#040404] mb-3 leading-5 font-medium">
                      30%
                    </p>
                    <p className="text-sm text-text2 leading-4">
                      Post handover
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-8 sm:mb-10">
                <h6 className="text-2xl text-[#040404] font-medium mb-7 leading-6">
                  Project Timeline
                </h6>
                <div className="bg-white p-5 rounded-xl">
                  <ul className="pl-10 relative after:absolute after:h-[80%] after:w-0.5 after:bg-border1 after:z-0 after:top-3.5  after:left-2.5  ">
                    <li className="mb-5 after:bg-primary after:absolute after:w-[18px] after:h-[18px] after:left-[-38px] after:top-1.5 relative after:rounded-full after:z-[1]">
                      <p className="text-[#040404}">Project announcement</p>
                    </li>
                    <li className="mb-5 after:bg-primary after:absolute after:w-[18px] after:h-[18px] after:left-[-38px] after:top-1.5 relative after:rounded-full after:z-[1]">
                      <p className="text-[#040404}">Project announcement</p>{" "}
                      <span className="text-xs text-text2">01/05/2024</span>
                    </li>
                    <li className="mb-5 after:bg-primary after:absolute after:w-[18px] after:h-[18px] after:left-[-38px] after:top-1.5 relative after:rounded-full after:z-[1]">
                      <p className="text-[#040404}">Construction started</p>{" "}
                      <span className="text-xs text-text2">01/05/2024</span>
                    </li>
                    <li className="mb-5 after:bg-border1 after:absolute after:w-[18px] after:h-[18px] after:left-[-38px] after:top-1.5 relative after:rounded-full after:z-[1]">
                      <p className="text-[#040404}">Expected completion</p>{" "}
                      <span className="text-xs text-text2">01/05/2024</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <h6 className="text-2xl text-[#040404] font-medium mb-5 leading-6">
                  About the project
                </h6>
                <p className=" text-text2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. 
                </p>
              </div>
            </div>
          </div>
          <div className=" xl:w-[35%]">
            <div className="xl:border border-[#B4B4B4] rounded-xl xl:p-5 xl:sticky top-24">
              <div className="rounded-xl xl:bg-white xl:py-6 xl:px-5">
                <div
                  className={`socialButtons fixed xl:static  w-full md:flex items-center xl:block left-0 px-3 sm:px-8 xl:px-0 py-3 xl:py-0 bg-white sm:gap-4 gap-1 z-[9] justify-between shadow-[0_-10px_40px_4px_#0000001c] xl:shadow-none duration-500 ${
                    isActive ? "-bottom-24" : "bottom-0"
                  }`}
                >
                  <p className="text-lg text-[#040404] leading-5 xl:mb-7 hidden md:block">
                    Get the latest information about this project.
                  </p>
                  <div className="flex xl:block gap-5">
                    <button className="flex items-center justify-center xl:mb-[18px] w-full text-base sm:text-lg text-white text-center bg-[#0D3DB7] py-2.5 pl-2 pr-3 xs:px-8 rounded-lg xs:font-medium tracking-wider lg:rounded-full">
                      <img
                        src={email}
                        alt=""
                        className="w-4 sm:w-5 mr-2 xs:mr-3 "
                      />
                      Email
                    </button>
                    <button className="flex items-center justify-center w-full text-base sm:text-lg text-white text-center bg-[#008E17] py-2.5 pl-2 pr-3 xs:px-8 rounded-lg xs:font-medium tracking-wider lg:rounded-full">
                      <img
                        src={whatsapp}
                        alt=""
                        className="w-4 sm:w-5 mr-2 xs:mr-3"
                      />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PhotosModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default NewProjectDetail;
