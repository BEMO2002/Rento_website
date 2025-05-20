import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router";
import { useAuth } from "../Context/AuthContext";

export const MobileNav = () => {
  const { isAuthenticated } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  const navStyle = {
    left: isOpen ? "0" : "-300px",
    transition: "left 0.4s ease",
  };

  return (
    <nav
      className="view bg-[#fff] fixed w-[300px] top-0 h-screen shadow-2xl z-20 transition-all duration-300"
      style={navStyle}
    >
      <div
        className="close-btn bg-secondary w-10 h-10 relative -right-full top-36 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all"
        onClick={toggleNav}
      >
        <span className="text-2xl text-white">
          <FaBars />
        </span>
      </div>

      <div className="px-2 flex flex-col h-full">
        <Link to="/">
          <h2 className="font-bold text-5xl text-center text-secondary">
            RENTO
          </h2>
        </Link>
        <hr />
        <div className="flex items-center justify-center space-x-4 mt-7 bg-assent px-2 py-3 rounded-xl">
          <div>
            <span className="bg-white text-black font-normal  text-xl  rounded-full">
              <FaRegUserCircle />
            </span>
          </div>

          <div className="flex flex-col">
            {isAuthenticated ? (
              <a href="" className="font-semibold text-xl">
                Sign out
              </a>
            ) : (
              <>
                <Link to="/signin" className="font-semibold text-xl">
                  Sign in
                </Link>
                <p className="text-[15px]">Don't have an account?</p>
                <Link to="/signup" className="text-primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        <ul className="flex flex-col gap-y-10 pt-10 font-semibold ml-4 mb-2">
          {[
            {
              to: "/rent",
              icon: "/assets/home/buyCarIcon.eeb2e066.svg",
              label: "Browse All Cars",
            },
            {
              to: "/WhyRento",
              icon: "/assets/home/sellCarIcon.35d865ce.svg",
              label: "Why Rento?",
            },
            {
              to: "/Faq",
              icon: "/assets/home/FAQsIcon.f22b2925.svg",
              label: "FAQs",
            },
            {
              to: "/Export",
              icon: "/assets/home/FinanceLogo.f5ba3d67.svg",
              label: "Export",
            },
            {
              to: "/PostAdd/:id",
              icon: "/assets/home/aboutUsIcon.d4ba4c84.svg",
              label: "Post Ad",
            },
            {
              to: "/contact",
              icon: "/assets/home/aboutUsIcon.d4ba4c84.svg",
              label: "Contact Us",
            },
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 justify-start">
              <img src={item.icon} alt="icon" />
              <Link to={item.to} className="link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <hr />

        <div className="flex flex-col items-center mt-8 gap-4">
          <Link className="px-20 py-3 bg-primary rounded-lg text-white font-bold text-xl">
            Rent A Car
          </Link>
        </div>
      </div>
    </nav>
  );
};
