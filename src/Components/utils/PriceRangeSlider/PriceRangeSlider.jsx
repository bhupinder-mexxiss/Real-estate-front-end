import React, { useState, useEffect, useRef } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./PriceRangeSlider.css";

const staticData = [
  { id: 1, name: "Item 1", price: 1600 },
  { id: 2, name: "Item 2", price: 2300 },
  { id: 3, name: "Item 3", price: 3100 },
  { id: 4, name: "Item 4", price: 5000 },
  { id: 5, name: "Item 5", price: 3400 },
  { id: 6, name: "Item 6", price: 4200 },
  { id: 7, name: "Item 7", price: 4500 },
  { id: 8, name: "Item 8", price: 4200 },
  { id: 9, name: "Item 9", price: 2500 },
  { id: 10, name: "Item 10", price: 4200 },
  { id: 11, name: "Item 11", price: 4200 },
  { id: 12, name: "Item 12", price: 4200 },
  { id: 13, name: "Item 13", price: 4200 },
  { id: 14, name: "Item 14", price: 2800 },
  { id: 15, name: "Item 15", price: 2800 },
  { id: 16, name: "Item 16", price: 4200 },
  { id: 17, name: "Item 17", price: 4200 },
  { id: 18, name: "Item 18", price: 4200 },
  { id: 19, name: "Item 19", price: 4200 },
  { id: 20, name: "Item 20", price: 4200 },
  { id: 21, name: "Item 21", price: 5000 },
];

const CustomBarChart = () => {
  const [priceRange, setPriceRange] = useState([1500, 5000]);

  const canvasRef = useRef(null);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  const step = 200;
  const priceSteps = Array.from(
    { length: Math.ceil((5000 - 1500) / step) + 1 },
    (_, i) => 1500 + i * step
  );

  const data = priceSteps.map((stepPrice, index) => {
    const nextStepPrice =
      index === priceSteps.length - 1 ? 5000 : stepPrice + step;
    const count = staticData.filter(
      (item) => item.price >= stepPrice && item.price < nextStepPrice
    ).length;

    return {
      name: `${stepPrice} - ${nextStepPrice}`,
      count,
      isHighlighted: stepPrice < priceRange[1] && nextStepPrice > priceRange[0],
    };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const barWidth = canvasWidth / data.length;
    const maxCount = Math.max(...data.map((d) => d.count), 1); // Prevent divide by zero
    const barHeightScale = canvasHeight / maxCount;

    context.clearRect(0, 0, canvasWidth, canvasHeight); // Clear canvas before drawing

    data.forEach((item, index) => {
      const x = index * barWidth;
      const barHeight = item.count * barHeightScale;
      const y = canvasHeight - barHeight;
      const color = item.isHighlighted ? "#00858e4e" : "transparent";

      context.fillStyle = color;
      context.fillRect(x, y, barWidth, barHeight);
    });
  }, [data]);

  return (
    <div className="lg:max-w-60">
      <div className="flex items-center mb-5">
        <span className="text-base text-[#040404] mr-1">${priceRange[0]}</span>
        <span>-</span>
        <span className="text-base text-[#040404] ml-1">${priceRange[1]}</span>
      </div>
      <div className="px-3">
        <div className="relative w-full">
          <Slider
            range
            min={1500}
            max={5000}
            step={200}
            value={priceRange}
            onChange={handleSliderChange}
            className="price-range__slider absolute w-[100%] mx-0 left-1/2 -translate-x-1/2 z-10 bottom-[-9px]"
          />
          <canvas
            ref={canvasRef}
            width={1090} // Adjust width as needed
            height={60} // Adjust height as needed
            className="bar-chart-canvas"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomBarChart;
