import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framermotion/varient";
export const CommingSoon = () => {
  const [activeIndex, setActiveIndex] = useState(0); // default to first image active

  const images = [
    "/assets/home/car1.webp",
    "/assets/home/car2.webp",
    "/assets/home/car3.webp",
    "/assets/home/car4.webp",
  ];

  return (
    <motion.section
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="py-20"
    >
      <div className="container mx-auto mb-3 cursor-pointer">
        <div className="flex items-center justify-center w-full">
          <div className="w-1/12 border-t-2 border-primary"></div>
          <span className="mx-4 text-3xl lg:text-4xl font-bold">
            Coming Soon
          </span>
          <div className="w-1/12 border-t-2 border-primary"></div>
        </div>

        <div className="container mx-auto flex items-center flex-col lg:flex-row gap-x-3 gap-y-3 list-image mt-8 car-top">
          {images.map((src, index) => (
            <div
              key={index}
              onMouseOver={() => {
                setActiveIndex(index);
              }}
              className={`h-[200px] lg:h-[600px] rounded-2xl cursor-pointer overflow-hidden relative transition-all duration-300 ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <img
                className="overflow-hidden h-full w-full object-cover"
                src={src}
                alt={`car${index}`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href=""
            className="lg:px-[70px] lg:py-[13px] px-[25px] py-[9px] bg-primary hover:bg-secondary hover:text-white duration-500 text-white text-lg font-bold rounded-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </motion.section>
  );
};
