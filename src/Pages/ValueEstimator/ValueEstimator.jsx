import { KeyboardArrowLeftOutlined } from "@mui/icons-material";
import React from "react";
import SearchIcon from "../../assets/icons/searchIcon.png";
import location_pinIcon from "../../assets/icons/location_pinIcon.png";
import typeIcon from "../../assets/icons/type.png";
import area from "../../assets/icons/area.png";
import bedrooms from "../../assets/icons/bedrooms.png";
import bathrooms from "../../assets/icons/bathrooms.png";
import amenities from "../../assets/icons/dashboard.png";
import ValueEstimatorImg from "../../assets/images/ValueEstimator.png";
import { Link } from "react-router-dom";

const ValueEstimator = () => {
  return (
    <div className="pt-6 pb-12 productDetail">
      <div className="container mx-auto">
        <Link to="/explore" className="mb-6 text-text2 sm:text-xl font-medium flex items-center">
          <KeyboardArrowLeftOutlined className="!text-2xl" /> Back
        </Link>
        <div className="mt-10">
          <h6 className="text-text2 text-2xl sm:text-3xl text-center font-medium">
            Home Value Estimator
          </h6>
          <div className="max-w-[700px] mx-auto mt-6 sm:mt-10 rounded-full border border-[#D3D3D3] flex items-center pl-6 relative">
            <input
              type="text"
              className="border-none p-0 bg-transparent w-full text-text1 placeholder:text-text2 pr-3"
              placeholder="Enter a community or building"
            />
            <button className="xs:min-w-10 xs:w-10 xs:h-10 min-w-8 w-8 h-8 flex items-center justify-center bg-primary rounded-full">
              <img src={SearchIcon} alt="" className="w-4 xs:w-5" />
            </button>
          </div>
          <div className="lg:flex gap-10 mt-14">
            <div className="basis-2/3">
              <h6 className="text-[#040404] text-xl font-medium">
                How is it calculated?
              </h6>
              <p className="text-text2 mt-5">
                Our predictive model calculates the price of your property using
                the latest and historical data from Property Finder’s listings.
                The result? A comprehensive home valuation estimate. Now you can
                see
              </p>
              <ul className="mt-5 list-disc text-text2 ml-4">
                <li>Your property’s sale price</li>
                <li>Your property’s rental price</li>
                <li>Price trends shaping the market </li>
              </ul>
            </div>
            <div className="basis-1/3">
              <img src={ValueEstimatorImg} alt=""  className="max-w-[370px] w-full mx-auto mt-10 lg:mt-0 "/>
            </div>
          </div>
          <div className="mt-10 lg:flex">
            <div className="lg:basis-2/3">
              <h6 className="text-[#040404] text-xl font-medium">
                Factors considered for value estimations
              </h6>
              <ul className="grid grid-cols-2 sm:grid-cols-3 mt-6 gap-5">
                <li className="flex items-center gap-3.5">
                  <span className="xs:min-w-10 xs:w-10 xs:h-10 min-w-8 w-8 h-8 flex items-center justify-center bg-[#00858E14] border border-primary rounded-full">
                    <img
                      src={location_pinIcon}
                      className="w-4 xs:w-5 imgColor "
                      alt=""
                    />
                  </span>
                  <span className="text-[#040404] text-sm xs:text-base">Location</span>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="xs:min-w-10 xs:w-10 xs:h-10 min-w-8 w-8 h-8 flex items-center justify-center bg-[#00858E14] border border-primary rounded-full">
                    <img src={typeIcon} className="w-4 xs:w-5 " alt="" />
                  </span>
                  <span className="text-[#040404] text-sm xs:text-base">Property Type</span>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="xs:min-w-10 xs:w-10 xs:h-10 min-w-8 w-8 h-8 flex items-center justify-center bg-[#00858E14] border border-primary rounded-full">
                    <img src={area} className="w-4 xs:w-5 " alt="" />
                  </span>
                  <span className="text-[#040404] text-sm xs:text-base">Property Size</span>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="xs:min-w-10 xs:w-10 xs:h-10 min-w-8 w-8 h-8 flex items-center justify-center bg-[#00858E14] border border-primary rounded-full">
                    <img src={amenities} className="w-4 xs:w-5 imgColor" alt="" />
                  </span>
                  <span className="text-[#040404] text-sm xs:text-base">Amenities</span>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="xs:min-w-10 xs:w-10 xs:h-10 min-w-8 w-8 h-8 flex items-center justify-center bg-[#00858E14] border border-primary rounded-full">
                    <img src={bedrooms} className="w-4 xs:w-5 " alt="" />
                  </span>
                  <span className="text-[#040404] text-sm xs:text-base">Bedrooms</span>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="xs:min-w-10 xs:w-10 xs:h-10 min-w-8 w-8 h-8 flex items-center justify-center bg-[#00858E14] border border-primary rounded-full">
                    <img src={bathrooms} className="w-4 xs:w-5 " alt="" />
                  </span>
                  <span className="text-[#040404] text-sm xs:text-base">Bathrooms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueEstimator;
