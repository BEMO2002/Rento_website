import { useRef } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framermotion/varient";

const CarShow = () => {
  let imgRef = useRef(null);
  const clickHandler = (ev) => {
    imgRef.current.classList.add("opacity-0");
    setTimeout(() => {
      imgRef.current.src = ev.target.src;
      imgRef.current.classList.remove("opacity-0");
    }, 300);
  };

  return (
    <>
      <section className="lg:pt-32 pt-0 pb-10 landing overflow-hidden relative">
        <div className="container mx-auto relative z-10">
          <div className="flex lg:flex-row flex-col justify-between gap-x-6">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="lg:pt-20 pt-10 car-top"
            >
              <h1 className="lg:text-[60px] text-[40px] font-bold mb-4 mt-10 text-center lg:text-start">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Rento
                </span>{" "}
                Guaranteed!
              </h1>
              <p className="text-primary font-semibold text-center lg:text-2xl text-sm lg:text-start ml-1">
                Trade Used Cars Safely, Seamlessly, and Quickly!
              </p>

              <div className="flex flex-row mt-8 gap-4 items-center justify-center">
                <Link
                  id="rent"
                  to="/Rent"
                  className="lg:px-[70px] lg:py-[13px] px-[25px] py-[9px] bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-bold text-lg"
                >
                  Rent A Car
                </Link>
                <Link
                  to="/cars/add"
                  className="lg:px-[70px] lg:py-[13px] px-[25px] py-[9px] bg-secondary rounded-lg text-white font-bold text-lg"
                >
                  Add Your Car
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="car-bottom"
            >
              <img
                src="/assets/home/car.webp"
                alt="car home"
                ref={imgRef}
                className="w-[700px] pt-8 img transition-opacity duration-300 ease-in-out "
              />
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex flex-row lg:gap-16 gap-3 items-center justify-center mt-10 lg:p-6 p-5 rounded-2xl w-fit mx-auto shadow car-top"
          >
            <img
              onClick={clickHandler}
              src="/assets/home/0_616-347-logo-1_8a07ed68.png.pagespeed.ce.WJx1s68HUv.png"
              alt="car1"
              className="lg:w-[170px] w-[60px] rounded-xl cursor-pointer hover:scale-[1.2] transition-transform duration-500"
            />
            <img
              onClick={clickHandler}
              src="/assets/home/0_616-347_dbc1e021.png.pagespeed.ce.UGp38-f0tt.png"
              alt="car2"
              className="lg:w-[170px] w-[60px] rounded-xl cursor-pointer hover:scale-[1.2] transition-transform duration-500"
            />
            <img
              onClick={clickHandler}
              src="/assets/home/0_green720-405_b2b658f6.png.pagespeed.ce.v_zmZgkkMg.png"
              alt="car3"
              className="lg:w-[170px] w-[60px] rounded-xl cursor-pointer hover:scale-[1.2] transition-transform duration-500"
            />
            <img
              onClick={clickHandler}
              src="/assets/home/0_616-347-1-1_cbf5f33e.png"
              alt="car4"
              className="lg:w-[170px] w-[60px] rounded-xl cursor-pointer hover:scale-[1.2] transition-transform duration-500"
            />
            <img
              onClick={clickHandler}
              src="/assets/home/0_haoyue-thumb_4c5773c4.png"
              alt="car5"
              className="lg:w-[170px] w-[60px] rounded-xl cursor-pointer hover:scale-[1.2] transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CarShow;
