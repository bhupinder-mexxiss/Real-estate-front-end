import { Modal } from "flowbite-react";
import React, { useState } from "react";
import house1 from "../../../assets/images/house1.png";
import house2 from "../../../assets/images/house2.png";
import house3 from "../../../assets/images/house3.png";
import Slider from "react-slick";
import "./PhotosModal.css";
import { CloseOutlined } from "@mui/icons-material";

const PhotosModal = ({ openModal, setOpenModal }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide

  const images = [
    house1,
    house2,
    house3,
    house1,
    house2,
    house3,
    house1,
    house2,
    house3,
  ]; // Array of images

  const settingsMain = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    asNavFor: nav2,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update slide index before change
  };

  const settingsThumbs = {
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: nav1,
    focusOnSelect: true,
    infinite: true,
  };

  return (
    <div>
      <Modal
        size="6xl"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="z-[99999] PhotosModal bg-opacity-90 bg-black p-0"
      >
        <Modal.Body className="p-4 overflow-visible">
            <button className="text-white absolute right-0" onClick={() => setOpenModal(false)}><CloseOutlined/></button>
          <div className="max-w-[790px] mx-auto px-10">
            {/* Main Slider */}
            <Slider
              {...settingsMain}
              className="main-slider"
              ref={(slider1) => setNav1(slider1)}
            >
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="slide-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="max-w-[900px] mx-auto mt-2">
            {/* Current Slide Indicator */}
            <p className="text-center text-white text-xl mb-2">
              {currentSlide + 1}/{images.length}
            </p>

            {/* Thumbnail Slider */}
            <Slider
              {...settingsThumbs}
              className="thumbnail-slider"
              ref={(slider2) => setNav2(slider2)}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail-item ${currentSlide === index ? "" : "brightness-[50%]"}`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className="thumbnail"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PhotosModal;
