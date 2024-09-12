import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/insta.png";
import twitter from "../../assets/icons/twitter.png";
import indeed from "../../assets/icons/in.png";

const Footer = () => {
  return (
    <div className="">
      <div className="pt-8 lg:rounded-t-[36px] bg-white">
        <div className="container mx-auto">
          <div className="pb-8 pt-4 xs:pb-11 sm:pb-16 md:pb-20 lg:pb-[120px] relative overflow-hidden">
            <div className="xs:flex flex-wrap pb-8 border-b-[1.6px] border-border1">
              <div className="w-full xs:w-1/2 lg:w-[30%] 2xl:w-1/4 mb-5 xs:mb-0">
                <p className="text-sm sm:text-base text-text2 mb-4 xs:mb-6">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque .
                </p>
                <div>
                  <p className="text-sm sm:text-base text-text2">
                    +152 78457349587
                  </p>
                  <p className="text-sm sm:text-base text-text2">
                    property@gmail.com
                  </p>
                </div>
              </div>
              <div className="w-full xs:w-1/2 lg:w-2/5 2xl:w-1/2 2xl:px-36 xl:pl-24 xl:pr-16 lg:pl-14 lg:pr-12 md:pl-20 sm:pl-10 xs:pl-6 xs:pr-4 ">
                <ul className="grid grid-rows-5 grid-flow-col *:duration-300 xs:justify-between">
                  <li className="hover:translate-x-1 mb-2 xs:mb-3">
                    <Link className="text-sm sm:text-base text-text2 *:duration-300 hover:text-primary">
                      Home
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 mb-2 xs:mb-3">
                    <Link className="text-sm sm:text-base text-text2 *:duration-300 hover:text-primary">
                      Buy
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 mb-2 xs:mb-3">
                    <Link className="text-sm sm:text-base text-text2 *:duration-300 hover:text-primary">
                      Rent
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 mb-2 xs:mb-3">
                    <Link className="text-sm sm:text-base text-text2 *:duration-300 hover:text-primary">
                      Commercial
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 mb-2 xs:mb-3">
                    <Link className="text-sm sm:text-base text-text2 *:duration-300 hover:text-primary">
                      New Project
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 mb-2 xs:mb-3">
                    <Link className="text-sm sm:text-base text-text2 *:duration-300 hover:text-primary">
                      Find Agent
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 mb-2 xs:mb-3">
                    <Link className="text-sm sm:text-base text-text2 *:duration-300 hover:text-primary">
                      Explore
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full xs:w-1/2 lg:w-[30%] 2xl:w-1/4 mt-5 lg:mt-0">
                <ul className="flex gap-3 lg:justify-end">
                  <li>
                    <Link className="w-10 h-10 duration-300 hover:-translate-y-1 bg-primary rounded-full flex items-center justify-center">
                      <img src={facebook} alt="" className="w-3 sm:w-4" />
                    </Link>
                  </li>
                  <li><Link className="w-10 h-10 duration-300 hover:-translate-y-1 bg-primary rounded-full flex items-center justify-center">
                      <img src={insta} alt="" className="w-3 sm:w-4" />
                    </Link>
                  </li>
                  <li><Link className="w-10 h-10 duration-300 hover:-translate-y-1 bg-primary rounded-full flex items-center justify-center">
                      <img src={twitter} alt="" className="w-3 sm:w-4" />
                    </Link>
                  </li>
                  <li><Link className="w-10 h-10 duration-300 hover:-translate-y-1 bg-primary rounded-full flex items-center justify-center">
                      <img src={indeed} alt="" className="w-3 sm:w-4" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center absolute w-full">
              <h4 className="text-[36px] xs:text-[48px] sm:text-[68px] md:text-[90px] lg:text-[130px] uppercase text-primary opacity-[20%]">
                REAL ESTATE
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
