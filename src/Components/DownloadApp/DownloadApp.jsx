import React from "react";
import appleStore from "../../assets/images/appleStore.png";
import googlePlay from "../../assets/images/googlePlay.png";
import bar_code from "../../assets/images/bar_code.png";
import mobile1 from "../../assets/images/mobile1.png";
import mobile2 from "../../assets/images/mobile2.png";

const DownloadApp = () => {
  return (
    <div className="py-8 sm:pt-12 xl:pt-20 sm:pb-10 bg-primary overflow-hidden md:overflow-visible">
      <div className="container mx-auto relative">
        <div className="md:grid grid-cols-2 ">
          <div className=" text-center sm:text-left">
            <h4 className="capitalize font-medium text-white text-[22px] sm:text-2xl xl:text-[32px] 2xl:text-[38px] mb-4 xl:mb-5 lg:leading-9 xl:leading-[48px] 2xl:leading-[56px] max-w-[310px] xs:max-w-[400px] md:max-w-full mx-auto sm:mx-0">
              Download the UAE’s most trusted property search app.
            </h4>
            <p className="text-base text-white mb-3 lg:mb-9">
              Install the app and start searching smarter.
            </p>
            <div className="gap-7 hidden sm:flex">
              <div>
                <img src={appleStore} alt="" className="w-16 md:w-[78px] lg:w-[108px] mb-[14px]" />
                <div className="bg-white p-1 rounded-md">
                  <img src={bar_code} alt="" className="w-[56px] md:w-[70px] lg:w-[100px]" />
                </div>
              </div>
              <div>
                <img src={googlePlay} alt="" className="w-16 md:w-[78px] lg:w-[108px] mb-[14px]" />
                <div className="bg-white p-1 rounded-md">
                  <img src={bar_code} alt="" className="w-[56px] md:w-[70px] lg:w-[100px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img src={mobile2} alt="" className="absolute w-[440px] lg:w-[550px] xl:w-[670px] top-[-78px] xl:top-[-118px] right-0 hidden md:block" />
            <div className="w-[130px] sm:w-full h-[180px] sm:h-full overflow-hidden sm:overflow-visible mx-auto"> 

              <img src={mobile1} alt="" className="sm:absolute w-full  sm:w-36 right-8 top-0 block md:hidden" />
            </div>
              <div className="gap-2 sm:gap-7 sm:hidden flex justify-center mt-4">
                <div>
                  <img src={appleStore} alt="" className="w-[120px]" />
                </div>
                <div>
                  <img src={googlePlay} alt="" className="w-[120px]" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
