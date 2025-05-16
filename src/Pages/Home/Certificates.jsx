import { motion } from "framer-motion";
import { fadeIn } from "../../Framermotion/varient";
export const Certificates = () => {
  return (
    <section className="pt-32 pb-10">
      <div className=" mx-auto bg-assent p-10 container car-bottom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 text-center items-center">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex flex-col items-center"
          >
            <img
              src="/assets/home/inspectionPoints.b1b7d11b.svg"
              alt=""
              className="w-[150px]"
            />
            <p className="mt-3 text-xl font-bold text-primary">
              Pass 200 Points Inspection
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex flex-col items-center"
          >
            <img
              src="/assets/home/MoneyBackBadge.0fbe934e.svg"
              alt=""
              className="w-[140px]"
            />
            <p className="mt-3 text-xl font-bold text-primary ">
              7-Day Money Back Guarantee
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex flex-col items-center"
          >
            <img
              src="/assets/home/warrantyBadge.399acb56.svg"
              alt=""
              className="w-[140px]"
            />
            <p className="mt-3 text-xl font-bold text-primary">
              90-Days Comprehensive Warranty
            </p>
          </motion.div>
        </div>
        <div className="text-center mt-8">
          <a
            href=""
            className="lg:px-[70px] lg:py-[13px] px-[25px] py-[9px] bg-gradient-to-r from-primary to-secondary  duration-500 text-white text-lg font-bold rounded-lg "
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};
