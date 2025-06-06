import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Framermotion/varient";
export const Export = () => {
  return (
    <div class="pt-20 pb-20">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        class="container mx-auto"
      >
        <div class="flex items-center justify-center w-full">
          <div class="w-1/12 border-t-2 border-primary"></div>
          <span class="mx-4 text-3xl lg:text-4xl font-bold ">
            Export Process
          </span>
          <div class="w-1/12 border-t-2 border-primary"></div>
        </div>
        <div class="pt-32">
          <img
            src="/assets/export/6b11cc658013f9de1933441d20bb17.jpg.webp"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};
