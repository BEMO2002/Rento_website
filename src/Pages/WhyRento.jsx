import { motion } from "framer-motion";
import { fadeIn } from "../Framermotion/varient";
export const WhyRento = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto overflow-hidden">
        <div className="flex items-center justify-center w-full">
          <div className="w-1/12 border-t-2 border-primary"></div>
          <span className="mx-4 text-3xl lg:text-4xl font-bold ">
            How it Works?
          </span>
          <div className="w-1/12 border-t-2 border-primary"></div>
        </div>
        <div className="flex lg:flex-row flex-col  items-center justify-between gap-10 ">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <img src="/assets/what/howItWorks1.1aa11cfd.svg" alt="work one" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex items-start flex-col"
          >
            <span className="pl-3 pr-4 rounded-full text-primary bg-assent text-xl font-bold mb-4">
              1
            </span>
            <h3 className="text-4xl text-primary font-bold ">
              {" "}
              Find your Perfect Rento Certified car
            </h3>
            <p className="text-lg mt-3">
              Browse our wide range of high-quality and great value Sylndr
              Certified cars. Whether it’s a price range or a body type, there’s
              a Sylndr Certified car for you
            </p>
          </motion.div>
        </div>
        <hr />
        <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-10 mt-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex items-start flex-col"
          >
            <span className="pl-3 pr-4 rounded-full text-primary bg-assent text-xl font-bold mb-4">
              2
            </span>
            <h3 className="text-4xl text-primary font-bold ">
              {" "}
              See everything inside out
            </h3>
            <p className="text-lg mt-3">
              Everything you need to know is available online; go through
              features, specs, price, financing and our detailed inspection
              report. Use our high-res 360 imaging and imperfections to get into
              every detail.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <img src="/assets/what/howItWorks2.52cebd25.svg" alt="work" />
          </motion.div>
        </div>
        <hr />
        <div className="flex lg:flex-row flex-col  items-center justify-between gap-20 mt-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <img src="/assets/what/howItWorks3.4b81cf5c.svg" alt="work" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex items-start flex-col"
          >
            <span className="pl-3 pr-4 rounded-full text-primary bg-assent text-xl font-bold mb-4">
              3
            </span>
            <h3 className   ="text-4xl text-primary font-bold ">
              {" "}
              Test drive time! Where shall we meet?
            </h3>
            <p className="text-lg mt-3">
              Book your test drive at your home, our experts will ride along to
              help you make the right decision and answer all your inquiries. We
              want you to have the test drive at a location convenient to your
              daily schedule.
            </p>
          </motion.div>
        </div>
        <hr />
        <div className="flex lg:flex-row flex-col-reverse  items-center justify-between gap-20 mt-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex items-start flex-col"
          >
            <span className="pl-3 pr-4 rounded-full text-primary bg-assent text-xl font-bold mb-4">
              4
            </span>
            <h3 className="text-4xl text-primary font-bold ">
              {" "}
              You can always Finance it
            </h3>
            <p className="text-lg mt-3">
              Choose your favorite financing plan and Submit your application
              online; and get your approval in just a few hours. We provide
              competitive interest rates that start from a 10% down payment.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <img src="/assets/what/howItWorks4.2b5bedb3.svg" alt="work" />
          </motion.div>
        </div>
        <hr />
        <div className="flex lg:flex-row flex-col  items-center justify-between gap-20 mt-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <img src="/assets/what/howItWorks5.8ad6081e.svg" alt="work" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex items-start flex-col"
          >
            <span className="pl-3 pr-4 rounded-full text-primary bg-assent text-xl font-bold mb-4">
              5
            </span>
            <h3 className="text-4xl text-primary font-bold ">
              {" "}
              Paperwork, never been easier!
            </h3>
            <p className="text-lg mt-3">
              You don’t need to visit the Public Notary Office to formalize the
              ownership transfer of your Sylndr Certified car, just head
              directly to the traffic authority and get your new license.
            </p>
          </motion.div>
        </div>
        <hr />
        <div className="flex lg:flex-row flex-col-reverse  items-center justify-between gap-20 mt-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className  ="flex items-start flex-col"
          >
            <span className="pl-3 pr-4 rounded-full text-primary bg-assent text-xl font-bold mb-4">
              6
            </span>
            <h3 className="text-4xl text-primary font-bold ">
              {" "}
              Collect it or have it delivered to your doorstep.
            </h3>
            <p className  ="text-lg mt-3">
              Choose whether to pick up the car from our Sylndr Hub or have it
              delivered to your doorstep, we want you to have a memorable
              experience.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <img src="/assets/what/howItWorks6.2954b685.svg" alt="work" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
