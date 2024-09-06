import React from "react";
import house1 from "../../assets/images/house1.png";
import house2 from "../../assets/images/house2.png";
import location_pinIcon from "../../assets/icons/location_pinIcon.png";
import "./Feature.css";

const Feature = () => {
  const data = [
    {
      id: 1,
      price: 50,
      title: "Skyline Residences",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      address: "5th Avenue, Abu Dhabi, UAE",
      img: house1,
    },
    {
      id: 1,
      price: 635,
      title: "Emerald Heights",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      address: "20 Embarcadero, Dubai, UAE",
      img: house2,
    },
  ];

  return (
    <div className="py-10 sm:py-14 md:py-[70px] feature">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-[34px] mb-8 md:mb-[50px]">
          {data.map((e) => (
            <div className="grid sm:grid-cols-2 bg-white sm:gap-4 rounded-2xl sm:rounded-[40px] lg:rounded-3xl xl:rounded-[58px] overflow-hidden card cursor-pointer">
              <div className="h-full w-full overflow-hidden">
                <img
                  src={e.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 xs:p-6 sm:py-6 2xl:py-8 pr-6 xl:pr-12">
                <p className="text-xl font-medium text-[#040404] mb-2 xs:mb-3">
                  <span>{e.price}</span> <span>AED</span>
                </p>
                <h5 className="text-xl font-medium text-[#040404] mb-2 xs:mb-3 xl:mb-5 text-ellipsis overflow-hidden text-nowrap">
                  {e.title}
                </h5>
                <p className="text-sm font-normal mb-2 xs:mb-4 md:mb-6 flex items-center gap-1.5 text-text2 ">
                  <span>
                    <img src={location_pinIcon} alt="" className="w-[15px] xl:w-[17px]" />
                  </span>{" "}
                  <span className="w-full text-ellipsis text-nowrap overflow-hidden">{e.address}</span>
                </p>
                <p className="text-sm font-normal text-text2">
                  {e.description}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="border border-border1 rounded-full py-2 sm:py-3 md:py-[15px] px-8 sm:px-14 md:px-[66px] text-base sm:text-lg md:text-[22px] text-text2 inline-block hover:border-primary hover:bg-primary hover:text-white duration-300">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
