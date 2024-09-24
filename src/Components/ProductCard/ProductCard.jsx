import React, { useState } from "react";
import location_pinIcon2 from "../../assets/icons/location_pinIcon2.png";
import bathroom_Icon from "../../assets/icons/bathroom_Icon.png";
import bedroom_icon from "../../assets/icons/bedroom_icon.png";
import size_Icon from "../../assets/icons/size_Icon.png";
import fav_Icon from "../../assets/icons/fav_Icon.png";
import fav_Icon2 from "../../assets/icons/fav_Icon2.png";
import { Link } from "react-router-dom";
import {
  FavoriteBorderRounded,
  FavoriteRounded,
  FlagOutlined,
  MoreVertRounded,
  ShareOutlined,
} from "@mui/icons-material";

const ProductCard = ({ products, link }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [favorites, setFavorites] = useState({});

  const toggleSelect = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle on click
  };
  const toggleFavorite = (id) => {
    setFavorites((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle favorite status based on product ID
    }));
  };
  return (
    <>
      {products?.map((items, index) => (
        <div
          className="productCard p-2.5 pb-5 rounded-[20px] bg-white relative"
          key={index}
        >
          <Link
            to={`/${link}/${items.id}`}
            className="absolute w-full h-full left-0 top-0 rounded-[20px]"
          ></Link>
          <div className="product_Thumb rounded-[14px] overflow-hidden max-h-[215px]">
            <img
              src={items.image}
              alt=""
              className="w-full h-[215px] object-cover object-center"
            />
          </div>
          <div>
            <div className="mt-[22px] flex justify-between">
              <div className="w-[calc(100%_-_64px)]md: w-[calc(100%_-_84px)]">
                <p className="text-lg sm:text-xl md:text-[22px] text-primary font-medium mb-2">
                  {items.price} AED
                </p>
                <p className="block sm:text-lg text-text1 font-medium mb-2">
                  Marian View
                </p>
                <p className="flex items-center">
                  <span>
                    <img src={location_pinIcon2} alt="" className="w-[15px]" />
                  </span>
                  <span className="text-sm px-2 text-text2 text-nowrap overflow-hidden text-ellipsis">
                    Dubai, Mina Rashid
                  </span>
                </p>
              </div>
              <div className="flex gap-2 relative z-10">
                <div className="relative">
                  <button
                    onClick={() => toggleSelect(index)}
                    className="md:w-[38px] md:h-[38px] w-7 h-7 flex items-center justify-center rounded-full border border-border1 cursor-pointer hover:border-primary duration-300"
                  >
                    <MoreVertRounded className="text-[#8B8B8B] !text-lg md:!text-xl" />
                  </button>
                  {activeIndex === index && (
                    <div className="absolute w-fit right-0 mt-2">
                      <ul className="bg-white shadow-[0px_8px_24px_0px_rgba(66,68,90,0.3)] py-1 rounded">
                        <li className="px-3 py-2 hover:bg-gray-100 text-nowrap min-w-32 cursor-pointer text-text2 flex items-center gap-2">
                          <FlagOutlined /> Report
                        </li>
                        <li className="px-3 py-2 hover:bg-gray-100 text-nowrap min-w-32 cursor-pointer text-text2 flex items-center gap-2">
                          <ShareOutlined /> Share
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => toggleFavorite(items.id)}
                  className="md:w-[38px] md:h-[38px] w-7 h-7 flex items-center justify-center rounded-full border border-border1 cursor-pointer hover:border-primary duration-300 fav_btn"
                >
                  {favorites[items.id] ? (
                    <FavoriteRounded className="text-primary !text-lg md:!text-xl" />
                  ) : (
                    <FavoriteBorderRounded className="text-[#8B8B8B] !text-lg md:!text-xl" />
                  )}
                </button>
              </div>
            </div>
            <div className="mt-3 pt-4 border-t border-border1">
              <div className="flex flex-wrap 2xl:flex-nowrap items-center text-xs justify-between gap-y-2.5 gap-x-2 xl:gap-x-4">
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
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
