import React, { useEffect, useRef, useState } from "react";
import house1 from "../../assets/images/house1.png";
import house2 from "../../assets/images/house2.png";
import house3 from "../../assets/images/house3.png";
import map_img from "../../assets/images/map_img.png";
import location_pinIcon2 from "../../assets/icons/location_pinIcon2.png";
import area from "../../assets/icons/area.png";
import bathrooms from "../../assets/icons/bathrooms.png";
import bedrooms from "../../assets/icons/bedrooms.png";
import construction from "../../assets/icons/construction.png";
import floor from "../../assets/icons/floor.png";
import plotArea from "../../assets/icons/plotArea.png";
import refrences from "../../assets/icons/refrences.png";
import type from "../../assets/icons/type.png";
import transaction from "../../assets/icons/transaction.png";
import breakfast from "../../assets/icons/breakfast.png";
import wheelchair from "../../assets/icons/wheelchair.png";
import smoking from "../../assets/icons/smoking.png";
import elevator from "../../assets/icons/elevator.png";
import kidFriendly from "../../assets/icons/kidFriendly.png";
import parking from "../../assets/icons/parking.png";
import pet from "../../assets/icons/pet.png";
import pool from "../../assets/icons/pool.png";
import multiFamlily from "../../assets/icons/multiFamlily.png";
import restaurant from "../../assets/icons/restaurant.png";
import email from "../../assets/icons/email.png";
import phone from "../../assets/icons/phone.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import userImg from "../../assets/images/userImg.png";
import { data } from "autoprefixer";
import {
  FavoriteBorderRounded,
  FavoriteRounded,
  FlagOutlined,
  KeyboardArrowLeftOutlined,
  PhotoCameraOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import Slider from "react-slick";
import "./productDetail.css";
import PhotosModal from "../../Components/Modals/PhotosModal/PhotosModal";

const ProductDetail = () => {
  let sliderRef = useRef(null);
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
  const essentialInfo = [
    { icon: transaction, title: "Transaction", value: "For Sale" },
    { icon: type, title: "Property Type", value: "Townhouse" },
    { icon: refrences, title: "References", value: "Automatic" },
    { icon: bedrooms, title: "Number of Bathroom", value: "3" },
    { icon: bathrooms, title: "Number of Bedroom", value: "4" },
    { icon: area, title: "Builded Area", value: "3000" },
    { icon: plotArea, title: "Plot Area", value: "1500 sqft" },
    { icon: construction, title: "Construction", value: "New" },
    { icon: floor, title: "Floor", value: "Tiles" },
  ];

  const facilities = [
    { icon: restaurant, title: "Restaurant" },
    { icon: smoking, title: "Smoking not Alllowed" },
    { icon: pool, title: "Pool" },
    { icon: elevator, title: "Elevator in Building" },
    { icon: breakfast, title: "Breakfast Included" },
    { icon: wheelchair, title: "Wheelchair Accessible" },
    { icon: parking, title: "Free parking" },
    { icon: multiFamlily, title: "Multi family" },
    { icon: kidFriendly, title: "Kid Friendly" },
    { icon: pet, title: "Pets Allowed" },
  ];

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
            <Slider
              {...settings}
              ref={(slider) => {
                sliderRef = slider;
              }}
              className="select-none"
            >
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
        <div className="lg:flex gap-9">
          <div className="lg:w-[65%]">
            <div className="product_Info ">
              <div className="product_title sm:flex justify-between mb-4">
                <h4 className="text-2xl sm:text-[30px] text-text1 font-medium leading-8">
                  Marina Views
                </h4>
                <span className="price text-2xl sm:text-[30px] text-primary font-medium sm:leading-8 mt-2 xs:mt-4 sm:mt-0 inline-block">
                  1,60,000 <span className="text-sm">AED</span>
                </span>
              </div>
              <p className="product_address flex items-center gap-1.5 text-text2">
                <span>
                  <img src={location_pinIcon2} alt="" className="w-[14px]" />
                </span>{" "}
                Dubai, Mina Rashid
              </p>
              <div className="product_details py-5 px-4 xl:px-12 rounded-xl xl:rounded-full bg-white mt-7 mb-8 sm:mb-10 border-2 border-[#B4B4B4]">
                <div className="flex justify-center gap-y-5">
                  <div className="hidden w-auto sm:flex flex-col pr-6 md:pr-9 lg:pr-6 2xl:pr-9 2xs:border-r border-border1">
                    <span className="text-text2 mb-1 sm:mb-2 px">
                      Property Type
                    </span>
                    <span className="text-lg md:text-xl font-medium text-[#040404]">
                      Townhouse
                    </span>
                  </div>
                  <div className="w-auto flex flex-col pr-2.5 2xs:pr-4 xs:pr-6  sm:px-6 md:px-9 lg:px-6 2xl:px-9 border-r border-border1">
                    <span className="text-text2 mb-1 sm:mb-2 px">Bedrooms</span>
                    <span className="text-base 2xl:text-lg md:text-xl font-medium text-[#040404]">
                      2 Beds
                    </span>
                  </div>
                  <div className="w-auto flex flex-col px-2.5 2xs:px-4 xs:px-6  sm:px-6 md:px-9 lg:px-6 2xl:px-9 border-r border-border1">
                    <span className="text-text2 mb-1 sm:mb-2 px">
                      Bathrooms
                    </span>
                    <span className="text-base 2xl:text-lg md:text-xl font-medium text-[#040404]">
                      2 Bath
                    </span>
                  </div>
                  <div className="w-auto flex flex-col pl-2.5 2xs:pl-4 xs:pl-6  sm:pl-6 md:pl-9 lg:pl-6 2xl:pl-9">
                    <span className="text-text2 mb-1 sm:mb-2 px">
                      Square Feet
                    </span>
                    <span className="text-base 2xl:text-lg md:text-xl font-medium text-[#040404]">
                      1,315 sqft
                    </span>
                  </div>
                </div>
              </div>
              <div className="product_discription mb-8 sm:mb-10">
                <h6 className="text-2xl text-[#040404] font-medium mb-4 leading-6">
                  Description
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
              <div className="loction_map mb-8 sm:mb-10">
                <h6 className="text-2xl text-[#040404] font-medium mb-4 leading-6">
                  Location
                </h6>
                <div className="location_map_wrapper rounded-2xl overflow-hidden border border-border1">
                  <img src={map_img} alt="" className="max-h-[500px] w-full" />
                </div>
              </div>
              <div className="product_essentialInfo bg-white p-5 sm:p-[30px] rounded-xl mb-8 sm:mb-10">
                <h6 className="text-2xl text-[#040404] font-medium mb-8 leading-6">
                  Essential Info
                </h6>
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 2xl:gap-x-8 gap-y-6">
                  {essentialInfo.map((item) => (
                    <div className="flex gap-2 sm:gap-[15px] sm:items-center items-start">
                      <div className="sm:w-[36px] sm:h-[36px] rounded-full sm:bg-[#00858E14] sm:border border-primary flex items-center justify-center">
                        <img src={item.icon} alt="" className="w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-text2 leading-4 mb-1.5 text-sm">
                          {item.title}
                        </span>
                        <span className="text-[#040404] text-sm">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="product_facilities bg-white p-5 sm:p-[30px] rounded-xl">
                <h6 className="text-2xl text-[#040404] font-medium mb-8 leading-6">
                  Facilities
                </h6>
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 2xl:gap-x-8 gap-y-6">
                  {facilities.map((item) => (
                    <div className="flex gap-2 sm:gap-[15px] sm:items-center items-start">
                      <div className="sm:w-[32px] sm:h-[32px] rounded-full sm:bg-[#00858E14] sm:border border-primary flex items-center justify-center">
                        <img
                          src={item.icon}
                          alt=""
                          className="w-[18px] pt-1 sm:pt-0"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#040404] text-sm">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 lg:mt-0 lg:w-[35%]">
            <div className="lg:border border-[#B4B4B4] rounded-xl lg:p-3 xl:p-5 lg:sticky top-24">
              <div className="rounded-xl bg-white py-6 px-6 lg:px-3 xl:px-5">
                <p className="text-lg font-medium text-[#040404] leading-4 mb-6">
                  Agent Details
                </p>
                <div className="flex gap-[15px] items-center">
                  <span className="rounded-full overflow-hidden w-12 h-12">
                    <img
                      src={userImg}
                      alt=""
                      className="w-12 h-12 object-cover"
                    />
                  </span>
                  <div>
                    <p className="text-xl text-[#040404] leading-5 mb-2.5">
                      Abdullah bin Mamun
                    </p>
                    <p className="product_address flex items-center gap-1.5 text-text2">
                      <span>
                        <img src={location_pinIcon2} alt="" className="w-4" />
                      </span>{" "}
                      Dubai, Mina Rashid
                    </p>
                  </div>
                </div>
                <div
                  className={`lg:mt-7 fixed lg:static w-full flex lg:block left-0 px-2 xs:px-4 lg-px-0 py-3 lg:py-0 bg-white sm:gap-4 gap-1 z-50 justify-between shadow-[0_-10px_40px_4px_#0000001c] lg:shadow-none duration-500 ${
                    isActive ? "-bottom-24" : "bottom-0"
                  }`}
                >
                  <button className="flex items-center justify-center lg:mb-[18px] min-w-20 w-full text-sm xs:text-base sm:text-lg text-white text-center bg-primary py-2.5 pl-2 pr-3 xs:px-6 rounded-lg xs:font-medium tracking-wider lg:rounded-full">
                    <img
                      src={phone}
                      alt=""
                      className="w-4 sm:w-5 mr-1 xs:mr-3"
                    />
                    call
                  </button>
                  <button className="flex items-center justify-center lg:mb-[18px] w-full text-sm xs:text-base sm:text-lg text-white text-center bg-[#0D3DB7] py-2.5 pl-2 pr-3 xs:px-6 rounded-lg xs:font-medium tracking-wider lg:rounded-full">
                    <img
                      src={email}
                      alt=""
                      className="w-4 sm:w-5 mr-1 xs:mr-3"
                    />
                    Email
                  </button>
                  <button className="flex items-center justify-center w-full text-sm xs:text-base sm:text-lg text-white text-center bg-[#008E17] py-2.5 pl-2 pr-3 xs:px-6 rounded-lg xs:font-medium tracking-wider lg:rounded-full">
                    <img
                      src={whatsapp}
                      alt=""
                      className="w-4 sm:w-5 mr-1 xs:mr-3"
                    />
                    WhatsApp
                  </button>
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

export default ProductDetail;
