import React from "react";
import "./filter.css";
import PriceRangeSlider from "../utils/PriceRangeSlider/PriceRangeSlider";

const Filter = () => {
  return (
    <div className="pt-4 pb-7 lg:px-5 filter ">
      <div className="grid sm:grid-cols-2 gap-4 lg:block mb-4">
        <div className="md-6 md:mb-10">
          <p className="mb-4 sm:mb-6 sm:text-lg text-[#040404] font-medium">
            Purpose
          </p>
          <ul>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="buy"
                name="purpose"
                value="buy"
              />
              <label className="text-text2" htmlFor="buy">
                Buy
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="rent"
                name="purpose"
                value="rent"
              />
              <label className="text-text2" htmlFor="buy">
                Rent
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Commercial_Rent"
                name="purpose"
                value="Commercial Rent"
              />
              <label className="text-text2" htmlFor="Commercial_Rent">
                Commercial Rent
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Commercial_Buy"
                name="purpose"
                value="Commercial Buy"
              />
              <label className="text-text2" htmlFor="Commercial_Buy">
                Commercial Buy
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="New_Project"
                name="purpose"
                value="New Project"
              />
              <label className="text-text2" htmlFor="New_Project">
                New Project
              </label>
            </li>
          </ul>
        </div>
        <div className="md-6 md:mb-10">
          <p className="mb-4 sm:mb-6 sm:text-lg text-[#040404] font-medium">
            Property Type
          </p>
          <ul>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Apartments"
                name="purpose"
                value="Apartments"
              />
              <label className="text-text2" htmlFor="Apartments">
                Apartments (1200)
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Villas"
                name="purpose"
                value="Villas"
              />
              <label className="text-text2" htmlFor="Villas">
                Villas (1200)
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="New Project"
                name="purpose"
                value="New Project"
              />
              <label className="text-text2" htmlFor="Townhouses">
                Townhouses (1200)
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Commercial Rent"
                name="purpose"
                value="Commercial Rent"
              />
              <label className="text-text2" htmlFor="buy">
                Land (1200)
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Commercial Buy"
                name="purpose"
                value="Commercial Buy"
              />
              <label className="text-text2" htmlFor="buy">
                Duplexes (1200)
              </label>
            </li>
          </ul>
          <button className="text-primary font-medium">Show More</button> 
        </div>
        <div className="md-6 md:mb-10">
          <p className="mb-4 sm:mb-6 sm:text-lg text-[#040404] font-medium">
            Rooms
          </p>
          <div className="flex flex-col">
            <label htmlFor="Bedroom" className="text-[#040404]">
              Bedroom
            </label>
            <input
              type="number"
              className="sm:max-w-60 mt-2 border border-border1 rounded-full w-full inline-block px-4 py-2 text-text2 placeholder:text-text2"
              placeholder="Enter Here"
              id="Bedroom"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="Bathroom" className="text-[#040404]">
              Bathroom
            </label>
            <input
              type="number"
              className="sm:max-w-60 mt-2 border border-border1 rounded-full w-full inline-block px-4 py-2 text-text2 placeholder:text-text2"
              placeholder="Enter Here"
              id="Bathroom"
            />
          </div>
        </div>
        <div className="md-6 md:mb-10">
          <p className="mb-[18px] sm:text-lg text-[#040404] font-medium">
            Price Range
          </p>
          <div>
            <PriceRangeSlider />
          </div>
        </div>
        <div className="md-6 md:mb-10">
          <p className="mb-4 sm:mb-6 sm:text-lg text-[#040404] font-medium">
            Furnishing
          </p>
          <ul>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="All furnishings"
                name="Furnishing"
                value="All furnishings"
              />
              <label className="text-text2" htmlFor="All furnishings">
                All furnishings
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Furnished"
                name="Furnishing"
                value="Furnished"
              />
              <label className="text-text2" htmlFor="Furnished">
                Furnished
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Unfurnished"
                name="Furnishing"
                value="Unfurnished"
              />
              <label className="text-text2" htmlFor="Unfurnished">
                Unfurnished
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Partly furnished"
                name="Furnishing"
                value="Partly furnished"
              />
              <label className="text-text2" htmlFor="buy">
                Partly furnished
              </label>
            </li>
          </ul>
        </div>
        <div className="md-6 md:mb-10">
          <p className="mb-4 sm:mb-6 sm:text-lg text-[#040404] font-medium">
          Completion Status
          </p>
          <ul>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Any"
                name="Completion"
                value="Any"
              />
              <label className="text-text2" htmlFor="Any">
                Any
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Off-plan"
                name="Completion"
                value="Off-plan"
              />
              <label className="text-text2" htmlFor="Off-plan">
                Off-plan
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Ready"
                name="Completion"
                value="Ready"
              />
              <label className="text-text2" htmlFor="Ready">
                Ready
              </label>
            </li>
          </ul>
        </div>
        <div className="md-6 md:mb-10">
          <p className="mb-4 sm:mb-6 sm:text-lg text-[#040404] font-medium">
          Amenities
          </p>
          <ul>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Central A/C"
                name="Amenities"
                value="Central A/C"
              />
              <label className="text-text2" htmlFor="Central A/C">
                Central A/C
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Maids Room"
                name="Amenities"
                value="Maids Room"
              />
              <label className="text-text2" htmlFor="Maids Room">
                Maids Room
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Balcony"
                name="Amenities"
                value="Balcony"
              />
              <label className="text-text2" htmlFor="Balcony">
                Balcony
              </label>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="text-primary rounded w-5 md:w-6 h-5 md:h-6 border-2"
                id="Shared Pool"
                name="Amenities"
                value="Shared Pool"
              />
              <label className="text-text2" htmlFor="buy">
                Shared Pool
              </label>
            </li>
          </ul>
          <button className="text-primary font-medium">Show More</button>
        </div>
        <div className="md-6 md:mb-10">
          <p className="mb-4 sm:mb-6 sm:text-lg text-[#040404] font-medium">
            Property Size (Sqft)
          </p>
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <input
                type="number"
                className="sm:max-w-60 border border-border1 rounded-full w-full inline-block px-4 py-1.5 text-text2 placeholder:text-text2"
                placeholder="Max Area"
              />
            </div>
            <span>-</span>
            <div className="flex flex-col">
              <input
                type="number"
                className="sm:max-w-60 border border-border1 rounded-full w-full inline-block px-4 py-1.5 text-text2 placeholder:text-text2"
                placeholder="Min Area"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="rounded-full w-full inline-block py-1.5 px-6 bg-primary sm:text-lg text-white font-medium">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
