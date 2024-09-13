import React, { useState } from "react";
import mapImg from '../../assets/images/map_img.png'

const MapSec = () => {
  const [isActive, setIsActive] = useState("Rent");
  return (
    <div className="MapSec pt-10">
      <div className="container mx-auto">
        <h4 className="text-xl sm:text-2xl  md:text-3xl  text-text1 font-medium text-center mb-3 lg:mb-5 capitalize">
          UAE property prices by <span className="title_Border pb-2">area</span>
        </h4>
        <div className="mt-4 xs:mt-6 md:mt-9">
          <div className="flex justify-center">
            <ul className="flex gap-2 xs:gap-3 md:gap-4 *:duration-300">
              <li
                className={`xs:min-w-24 md:min-w-36 flex items-center justify-center text-base xs:text-lg px-5 py-1.5 rounded-full border hover:border-primary hover:text-primary cursor-pointer ${
                  isActive === "Rent"
                    ? "text-white hover:text-white bg-primary border border-primary font-medium"
                    : "border-border1 text-text2 "
                }`}
                onClick={() => setIsActive("Rent")}
              >
                Rent
              </li>
              <li
                className={`xs:min-w-24 md:min-w-36 flex items-center justify-center text-base xs:text-lg px-5 py-1.5 rounded-full border hover:border-primary hover:text-primary cursor-pointer ${
                  isActive === "Buy"
                    ? "text-white hover:text-white bg-primary border border-primary font-medium"
                    : "border-border1 text-text2 "
                }`}
                onClick={() => setIsActive("Buy")}
              >
                Buy
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl sm:rounded-3xl overflow-hidden border border-border1 mt-6">
            <img src={mapImg} alt="" className="max-h-[350px] w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default MapSec;
