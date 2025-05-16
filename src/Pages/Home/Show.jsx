import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framermotion/varient";
export const Show = () => {
  return (
    <section className="pt-24 pb-10">
      <div className="container mx-auto bg-[#e9eaff] p-10 px-14 rounded-lg">
        <div className="flex items-center justify-between flex-col lg:flex-row car-bottom">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex gap-3 flex-col lg:items-start items-center"
          >
            <h2 className="font-bold text-3xl text-secondary">Rent Car</h2>
            <p className=" font-semibold ">
              Free home inspection, instant offer and payment, no hidden costs!
            </p>
            <a
              href=""
              className=" text-center lg:px-[30px] lg:py-[13px] px-[25px] py-[9px] bg-secondary hover:bg-primary  hover:text-white  duration-500 text-white text-lg font-bold rounded-lg "
            >
              Learn More
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className=""
          >
            <img src="/assets/home/carDesktopView.webp" alt="info" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
