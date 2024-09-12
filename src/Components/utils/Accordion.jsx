import React, { useEffect, useRef, useState } from "react";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";

const Accordion = ({ title, children, isOpen, toggleAccordion }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);
  return (
    <div
      className={`accordion-item px-4 sm:px-6 lg:px-8 py-4 lg:py-6 rounded-xl sm:rounded-3xl ${
        isOpen && "bg-[#00808040] "
      }`}
    >
      <div
        className="accordion-title flex justify-between items-center cursor-pointer gap-4"
        onClick={toggleAccordion}
      >
        <span className="text-base sm:text-xl font-medium text-text1 title duration-300">
          {title}
        </span>
        <span className="min-w-6 sm:min-w-8 md:min-w-11 min-h-6 sm:min-h-8 md:min-h-11 flex justify-center items-center bg-primary text-white rounded-md md:rounded-xl">
          {isOpen ? (
            <RemoveOutlined
              className={`w-6 h-6`}
            />
          ) : (
            <AddOutlined
              className={`w-6 h-6`}
            />
          )}
        </span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}px` }}
        className="accordion-content overflow-hidden transition-max-height duration-300 ease-in-out"
      >
        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
