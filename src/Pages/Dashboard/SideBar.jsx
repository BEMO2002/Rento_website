import React, { useState } from "react";
import { FaBars, FaTimes, FaCar, FaIdCard } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-secondary bg-opacity-50 z-10 lg:hidden"
          onClick={toggleNav}
        />
      )}

      <nav
        className={`bg-gray-50 fixed w-64 md:w-72 top-0 h-screen shadow-xl z-20 transition-all duration-300 ease-in-out ${
          isOpen ? "left-0" : "-left-64 md:-left-72"
        }`}
      >
        <button
          className="bg-secondary w-10 h-10 absolute -right-10 top-36 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer"
          onClick={toggleNav}
        >
          <span className="text-xl text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </span>
        </button>

        {/* Sidebar Content */}
        <div className="px-4 py-6 flex flex-col h-full">
          {/* Logo */}
          <Link
            to="/"
            className="mb-8 text-center"
            onClick={() => setIsOpen(false)}
          >
            <h2 className="font-bold text-3xl text-secondary">
              RENTO Dashboard
            </h2>
          </Link>

          <hr className="border-gray-600 mb-6" />

          {/* Menu Items */}
          <ul className="flex flex-col gap-y-10  flex-grow">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 p-3 rounded-lg text-secondary hover:bg-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <FaIdCard className="text-lg" />
                <span className="font-medium">ID Verifications</span>
              </Link>
            </li>
            <li>
              <Link
                to="/brands"
                className="flex items-center gap-3 p-3 rounded-lg text-secondary hover:bg-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <FaCar className="text-lg" />
                <span className="font-medium">Brands</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Rented"
                className="flex items-center gap-3 p-3 rounded-lg text-secondary hover:bg-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <FaCar className="text-lg" />
                <span className="font-medium">Rented Cars</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
