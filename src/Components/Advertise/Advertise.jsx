import React from "react";
import advertise from "../../assets/images/advertise.png";
import "./advertise.css"

const Advertise = () => {
  return (
    <div className="pt-10 md:pt-[72px] xl:pt-24 xl:-[92px] pb-8 md:pb-20 xl:pb-[110px] bg-primary mt-14 md:mt-20 lg:mt-[120px] -mb-8 advertise">
      <div className="container mx-auto ">
        <div className="md:grid grid-cols-2 relative">
          <div className="text-center md:text-start mb-6 xs:mb-10 md:mb-0">
            <h4 className="text-[22px] sm:text-2xl lg:text-[32px] xl:text-[38px] xs:leading-9 lg:leading-[46px] xl:leading-[56px] font-medium text-white capitalize mb-5 xl:mb-7 max-w-[620px]">
              Looking to advertise a property? We can help.
            </h4>
            <button className="py-2.5 lg:py-4 xl:py-5 px-6 xl:px-9 text-sm lg:text-base font-medium text-primary bg-white rounded-full">
              List Your Properties with us
            </button>
          </div>
          <div className="">
            <img
              src={advertise}
              alt=""
              className="md:absolute w-[370px] xs:w-[410px] mx-auto lg:w-[460px] xl:w-[643px] -bottom-12 xl:bottom-[-78px] right-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
