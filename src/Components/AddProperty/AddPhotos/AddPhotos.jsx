import React from "react";
import uploadIcon from "../../../assets/icons/uploadIcon.png";
import trashIcon from "../../../assets/icons/trashIcon.png";
import house1 from "../../../assets/images/house1.png";

const AddPhotos = ({ setCurrentStep }) => {
  return (
    <>
      <form>
        <div className="pb-16 lg:pb-0 ">
          <div className="flex flex-wrap gap-6 sm:gap-11 mb-[30px]">
            <div className="w-36 xs:w-40 sm:w-44 lg:w-56 h-36 xs:h-40 sm:h-44 lg:h-56 relative">
              <button className="w-10 h-10 rounded bg-[#00000066] absolute right-2.5 top-2.5 flex items-center justify-center">
                <img src={trashIcon} alt="" className="w-[18px]" />
              </button>
              <img
                src={house1}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="w-36 xs:w-40 sm:w-44 lg:w-56 h-36 xs:h-40 sm:h-44 lg:h-56 relative">
              <button className="w-10 h-10 rounded bg-[#00000066] absolute right-2.5 top-2.5 flex items-center justify-center">
                <img src={trashIcon} alt="" className="w-[18px]" />
              </button>
              <img
                src={house1}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div>
              <label
                htmlFor="addPhotos"
                className="w-36 xs:w-40 sm:w-44 lg:w-56 h-36 xs:h-40 sm:h-44 lg:h-56 border border-dashed border-[#D6D6D6] rounded cursor-pointer flex items-center justify-center flex-col sm:flex-row gap-3"
              >
                <img src={uploadIcon} alt="" className="w-5" />
                <span className="font-medium text-sm text-[#A9ACB4]">
                  Upload Images
                </span>
              </label>
              <input
                type="file"
                name="addPhotos"
                id="addPhotos"
                className="hidden"
              />
            </div>
          </div>
        </div>
        <div className="fixed lg:static bottom-3 w-full left-0 lg:px-0 sm:px-6 px-4 lg:mt-12 lg:mb-5 ">
          <button
            className=" text-white bg-primary font-medium text-lg lg:text-xl py-2 lg:py-3 rounded-md lg:rounded-xl px-10 lg:min-w-80 w-full lg:w-auto"
            onClick={() => setCurrentStep(4)}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default AddPhotos;
