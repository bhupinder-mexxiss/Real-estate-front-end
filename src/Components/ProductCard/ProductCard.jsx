import React from "react";
import location_pinIcon2 from "../../assets/icons/location_pinIcon2.png";
import bathroom_Icon from "../../assets/icons/bathroom_Icon.png";
import bedroom_icon from "../../assets/icons/bedroom_icon.png";
import size_Icon from "../../assets/icons/size_Icon.png";
import fav_Icon from "../../assets/icons/fav_Icon.png";
import fav_Icon2 from "../../assets/icons/fav_Icon2.png";
import { Link } from "react-router-dom";

const ProductCard = ({ products, link }) => {
  return (
    <>
      {products?.map((items, index) => (
        <div
          className="productCard p-2.5 pb-5 rounded-[20px] bg-white"
          key={index}
        >
          <div className="product_Thumb rounded-[14px] overflow-hidden max-h-[215px]">
            <img
              src={items.image}
              alt=""
              className="w-full h-[215px] object-cover object-center"
            />
          </div>
          <Link to={`/${link}/${items.id}`}>
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
                      className="w-[15px]"
                    />
                  </span>
                  <span className="text-sm px-2 text-text2 text-nowrap overflow-hidden text-ellipsis">
                    Dubai, Mina Rashid
                  </span>
                </p>
              </div>
              <div>
                <span className="w-[38px] h-[38px] flex items-center justify-center rounded-full border border-border1 cursor-pointer">
                  <img src={fav_Icon} alt="" className="w-[15px]" />
                </span>
              </div>
            </div>
            <div className="mt-3 pt-4 border-t border-border1">
              <div className="flex flex-wrap md:flex-nowrap items-center text-xs justify-between gap-y-2.5 gap-x-2 xl:gap-x-4">
                <span className="flex items-center">
                  <img src={size_Icon} alt="" className="w-[14px] mr-1.5" />
                  1108 SQFT
                </span>
                <span className="flex items-center">
                  <img src={bathroom_Icon} alt="" className="w-[14px] mr-1.5" />
                  3 Bathrooms
                </span>
                <span className="flex items-center">
                  <img src={bedroom_icon} alt="" className="w-[14px] mr-1.5" />4
                  Bedrooms
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
