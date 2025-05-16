import { FaCheckDouble } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framermotion/varient";
export const HowItWorks = () => {
  return (
    <section className="pt-20 pb-10 bg-[#f9fafb]">
      <div className="container mx-auto overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="flex items-center justify-center w-full mb-6 car-bottom"
        >
          <div className="w-1/12 border-t-2 border-primary"></div>
          <span className="mx-4 text-3xl lg:text-4xl font-bold ">
            How it works
          </span>
          <div className="w-1/12 border-t-2 border-primary"></div>
        </motion.div>
        <div className="flex flex-col items-center justify-between lg:flex-row gap-4 car-top">
          <motion.ul
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex flex-col items-center gap-10 text-left"
          >
            <li>
              <div className="flex  gap-1">
                <FaCheckDouble className=" text-xl font-bold text-primary" />
                <h3 className="lg:text-2xl text-lg font-semibold ">
                  {" "}
                  Choose your favorite Rento Certified car
                </h3>
              </div>
            </li>
            <li>
              <div className="flex  gap-1">
                <FaCheckDouble className=" text-xl font-bold text-primary" />
                <i className="ri-check-double-line text-xl font-bold text-primary"></i>
                <h3 className="lg:text-2xl text-lg font-semibold ">
                  Test your car at home or Rento showroom
                </h3>
              </div>
            </li>
            <li className="">
              <div className="flex  gap-1">
                <FaCheckDouble className=" text-xl font-bold text-primary" />
                <i className="ri-check-double-line text-xl font-bold text-primary"></i>
                <h3 className="lg:text-2xl text-lg font-semibold ">
                  {" "}
                  Finance it and have delivered to your door
                </h3>
              </div>
            </li>
            <li className="text-left link">
              <a
                href="why.html"
                className=" lg:px-[60px] lg:py-[13px] px-[25px] py-[9px] bg-gradient-to-r from-secondary to-primary text-white  duration-500  text-lg font-bold rounded-lg "
              >
                Learn More
              </a>
            </li>
          </motion.ul>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="car-top"
          >
            <img src="/assets/home/steps.webp" alt="info car" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
