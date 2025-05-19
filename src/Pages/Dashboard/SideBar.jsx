import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaCar,
  FaIdCard,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleNav}
        />
      )}

      <nav
        className={`bg-white fixed w-64 md:w-72 top-0 h-screen shadow-xl z-20 transition-all duration-300 ease-in-out ${
          isOpen ? "left-0" : "-left-64 md:-left-72"
        }`}
      >
        <button
          className={`close-btn bg-black w-10 h-10 absolute -right-10 top-36 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer `}
          onClick={toggleNav}
        >
          <span className="text-xl text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </span>
        </button>

        <div className="px-4 py-6 flex flex-col h-full">
          {/* Logo Section */}
          <Link to="/" className="mb-8" onClick={() => setIsOpen(false)}>
            <h2 className="font-bold text-3xl text-center text-secondary ">
              RENTO Dashboard
            </h2>
          </Link>

          <hr className="border-gray-200 mb-6" />

          <ul className="flex flex-col gap-y-2 flex-grow">
            {[
              {
                to: "/table",
                icon: <FaIdCard className="text-black text-lg" />,
                label: "ID Verifications",
              },
              {
                to: "/brands",
                icon: <FaCar className="text-black text-lg" />,
                label: "Brands",
              },
              {
                icon: <FaHome className="text-black text-lg" />,
                label: "Vehicles",
              },
            ].map((item, idx) => (
              <li key={idx}>
                {item.submenu ? (
                  <div className="mb-2">
                    <button
                      onClick={() => toggleSubmenu(idx)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg hover:bg-indigo-50 transition-colors ${
                        activeSubmenu === idx ? "bg-indigo-50" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <FaChevronDown
                        className={`text-sm text-gray-500 transition-transform ${
                          activeSubmenu === idx ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeSubmenu === idx && (
                      <ul className="ml-10 mt-1 space-y-1 py-1">
                        {item.submenu.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              to={subItem.to}
                              className="block px-3 py-2 text-sm rounded hover:bg-indigo-50 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.to}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-300 transition-colors mb-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
