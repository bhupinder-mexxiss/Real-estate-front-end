import React from "react";
import location_pinIcon2 from "../../assets/icons/location_pinIcon2.png";
import bathroom_Icon from "../../assets/icons/bathroom_Icon.png";
import bedroom_icon from "../../assets/icons/bedroom_icon.png";
import size_Icon from "../../assets/icons/size_Icon.png";
import fav_Icon from "../../assets/icons/fav_Icon.png";
import fav_Icon2 from "../../assets/icons/fav_Icon2.png";
import email from "../../assets/icons/email.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import { Link } from "react-router-dom";

const NewProjectCard = ({ products }) => {
  return (
    <>
      {products?.map((items, index) => (
        <div
          className="NewproductCard p-2.5 pb-5 rounded-[20px] bg-white"
          key={index}
        >
          <div className="product_Thumb rounded-[14px] overflow-hidden max-h-[215px]">
            <img
              src={items.image}
              alt=""
              className="w-full h-[215px] object-cover object-center"
            />
          </div>
          <Link to={`/new-project/${items.id}`}>
            <div className="mt-[22px] flex justify-between">
              <div className="w-[calc(100%_-_38px)]">
                <p className="text-[22px] text-primary font-medium mb-[14px]">
                  {items.price} AED
                </p>
                <p className="text-lg text-text1 font-medium mb-2">
                  Marian View
                </p>
                <p className="flex items-center">
                  <span>
                    <img
                      src={location_pinIcon2}
                      alt=""
                      className="min-w-[15px] lg:w-[17px]"
                    />
                  </span>
                  <span className="text-sm px-2 text-text2 text-nowrap overflow-hidden text-ellipsis">
                    Dubai, Mina Rashid
                  </span>
                </p>
              </div>
              <div className="flex gap-2">
                <span className="w-[38px] h-[38px] flex items-center justify-center rounded-full border border-border1 cursor-pointer">
                  <img src={email} alt="" className="w-[15px] imgColor" />
                </span>
                <span className="w-[38px] h-[38px] flex items-center justify-center rounded-full border border-border1 cursor-pointer">
                  <img src={whatsapp} alt="" className="w-[15px] imgColor" />
                </span>
              </div>
            </div>
            <div className="mt-3 pt-4 border-t border-border1">
              <div className="flex flex-wrap md:flex-nowrap items-center text-xs justify-between gap-y-2.5 gap-x-2 xl:gap-x-4">
                <p><span className="font-medium">Developer: </span>Tiger Group</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default NewProjectCard;
