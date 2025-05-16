import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framermotion/varient";
export const Flipers = () => {
  return (
    <section className="pt-24 pb-16 bg-[#f9fafb]">
      <div className="container mx-auto mb-3 cursor-pointer">
        <div className="flex items-center justify-center w-full">
          <div className="w-1/12 border-t-2 border-primary"></div>
          <span className="mx-4 text-3xl lg:text-4xl font-bold ">
            Why Rento?
          </span>
          <div className="w-1/12 border-t-2 border-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-8 gap-7">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flip-container w-80 h-80 mx-auto car-top"
          >
            <div className="flipper relative w-full h-full ">
              <div className="front absolute w-full h-full bg-[#fdfeff] flex items-center justify-center flex-col text-white text-xl rounded-lg shadow-xl p-1">
                <img
                  src="/assets/why/dollar-sign.png"
                  alt="pray1"
                  className="w-[80px]"
                />
                <h3 className="text-[#000] font-semibold text-xl mt-5">
                  Flexible Financing Options
                </h3>
                <p className="text-[#0000007b] text-center text-lg font-normal mt-2">
                  Quick, flexible and online! Get instant approvals for monthly
                  installment plans
                </p>
              </div>
              <div className="back absolute w-full h-full bg-gray-100 flex items-center justify-center text-white text-lg font-normal rounded-lg shadow-lg">
                <a
                  href=""
                  className="lg:px-[60px] lg:py-[13px] px-[25px] py-[9px] bg-primary text-white hover:bg-secondary  hover:text-white border duration-500 text-lg font-bold rounded-lg "
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flip-container w-80 h-80 mx-auto car-bottom"
          >
            <div className="flipper relative w-full h-full">
              <div className="front absolute w-full h-full bg-[#fdfeff] flex items-center justify-center flex-col text-white text-xl font-bold rounded-xl shadow-lg p-1">
                <img
                  src="/assets/why/car-wash.png"
                  alt="pray2"
                  className="w-[80px]"
                />
                <h3 className="text-[#000] font-semibold text-xl mt-5">
                  High-Quality Used Cars
                </h3>
                <p className="text-[#0000007b] text-center text-lg font-normal mt-2">
                  We own and refurbish every car to deliver our quality promise
                </p>
              </div>

              <div className="back absolute w-full h-full bg-gray-100 flex items-center justify-center text-white text-lg font-normal rounded-lg shadow-lg">
                <a
                  href=""
                  className="lg:px-[60px] lg:py-[13px] px-[25px] py-[9px] bg-primary text-white hover:bg-secondary  hover:text-white border duration-500 text-lg font-bold rounded-lg "
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flip-container w-80 h-80 mx-auto car-top"
          >
            <div className="flipper relative w-full h-full">
              <div className="front absolute w-full h-full bg-[#fdfeff] flex items-center justify-center flex-col text-white text-xl font-bold rounded-xl shadow-lg">
                <img
                  src="/assets/why/360-view.png"
                  alt="pray3"
                  className="w-[80px]"
                />
                <h3 className="text-[#000] font-semibold text-xl mt-5">
                  Transparent Online Experience
                </h3>
                <p className="text-[#0000007b] text-center text-lg font-normal mt-2">
                  360 degree imaging, inspection and imperfections reports fully
                  online
                </p>
              </div>

              <div className="back absolute w-full h-full bg-gray-100 flex items-center justify-center text-white text-lg font-normal rounded-lg shadow-lg">
                <a
                  href=""
                  className="lg:px-[60px] lg:py-[13px] px-[25px] py-[9px] bg-primary text-white hover:bg-secondary  hover:text-white border duration-500 text-lg font-bold rounded-lg "
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flip-container w-80 h-80 mx-auto car-bottom"
          >
            <div className="flipper relative w-full h-full">
              <div className="front absolute w-full h-full bg-[#fdfeff] flex items-center justify-center flex-col text-white text-xl font-bold rounded-xl shadow-lg">
                <img
                  src="/assets/why/track.png"
                  alt="pray4"
                  className="w-[80px]"
                />
                <h3 className="text-[#000] font-semibold text-xl mt-5">
                  Delivered at your Doorstep
                </h3>
                <p className="text-[#0000007b] text-center text-lg font-normal mt-2">
                  360 degree imaging, inspection and imperfections reports fully
                  online
                </p>
              </div>

              <div className="back absolute w-full h-full bg-gray-100 flex items-center justify-center text-white text-lg font-normal rounded-lg shadow-lg">
                <a
                  href=""
                  className="lg:px-[60px] lg:py-[13px] px-[25px] py-[9px] bg-primary text-white hover:bg-secondary  hover:text-white border duration-500 text-lg font-bold rounded-lg "
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flip-container w-80 h-80 mx-auto car-bottom"
          >
            <div className="flipper relative w-full h-full">
              <div className="front absolute w-full h-full bg-[#fdfeff] flex items-center justify-center flex-col text-white text-xl font-bold rounded-xl shadow-lg">
                <img
                  src="/assets/why/photographer.png"
                  alt="pray5"
                  className="w-[80px]"
                />
                <h3 className="text-[#000] font-semibold text-xl mt-5">
                  Fixed Price Assurance
                </h3>
                <p className="text-[#0000007b] text-center text-lg font-normal mt-2">
                  Get a fair and fixed price that saves you from the unnecessary
                  haggles and negotiations
                </p>
              </div>

              <div className="back absolute w-full h-full bg-gray-100 flex items-center justify-center text-white text-lg font-normal rounded-lg shadow-lg">
                <a
                  href=""
                  className="lg:px-[60px] lg:py-[13px] px-[25px] py-[9px] bg-primary text-white hover:bg-secondary  hover:text-white border duration-500 text-lg font-bold rounded-lg "
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flip-container w-80 h-80 mx-auto car-top"
          >
            <div className="flipper relative w-full h-full">
              <div className="front absolute w-full h-full bg-[#fdfeff] flex items-center justify-center flex-col text-white text-xl font-bold rounded-lg shadow-lg">
                <img
                  src="/assets/why/high-quality.png"
                  alt="pray6"
                  className="w-[80px]"
                />
                <h3 className="text-[#000] font-semibold text-xl mt-5">
                  Rento Certified
                </h3>
                <p className="text-[#0000007b] text-center text-lg font-normal mt-2">
                  We make sure that your car ownership is simple, assured and
                  reliable
                </p>
              </div>

              <div className="back absolute w-full h-full bg-gray-100 flex items-center justify-center text-white text-lg font-normal rounded-lg shadow-lg">
                <a
                  href=""
                  className="lg:px-[60px] lg:py-[13px] px-[25px] py-[9px] bg-primary text-white hover:bg-secondary  hover:text-white border  duration-500 text-lg font-bold rounded-lg "
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
