import Slider from "react-slick";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framermotion/varient";
const SlickSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="pt-20 pb-10  overflow-hidden"
    >
      <div className="container mx-auto car-top">
        <div className="flex items-center justify-center w-full mb-4">
          <div className="w-1/12 border-t-2 border-primary"></div>
          <span className="mx-4 text-3xl lg:text-4xl font-bold ">
            Popular Brands
          </span>
          <div className="w-1/12 border-t-2 border-primary"></div>
        </div>
        <div className="text-center ">
          <Slider {...settings}>
            <div className="">
              <img
                src="/assets/home/BMW.webp"
                alt="brand logo"
                className="w-[140px]"
              />
            </div>
            <div className="">
              <img
                src="/assets/home/Hyundai.webp"
                alt="brand logo"
                className="w-[140px]"
              />
            </div>
            <div className="">
              <img
                src="/assets/home/Ford.webp"
                alt="brand logo"
                className="w-[140px]"
              />
            </div>
            <div className="">
              <img
                src="/assets/home/Jeep.webp"
                alt="brand logo"
                className="w-[140px]"
              />
            </div>
            <div className="">
              <img
                src="/assets/home/Nissan.webp"
                alt="brand logo"
                className="w-[140px]"
              />
            </div>
            <div className="">
              <img
                src="/assets/home/Opel.webp"
                alt="brand logo"
                className="w-[140px]"
              />
            </div>
            <div className="">
              <img
                src="/assets/home/Peugeot.webp"
                alt="brand logo"
                className="w-[140px]"
              />
            </div>
            <div className="">
              <img
                src="/assets/home/Suzuki.webp"
                alt="brand logo"
                className="w-[140px]"
              />
            </div>
          </Slider>
        </div>
      </div>
    </motion.section>
  );
};

export default SlickSection;
