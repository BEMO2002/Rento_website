import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router";
import { useAuth } from "../Context/AuthContext";
import { FaCarOn } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { TbLogin2 } from "react-icons/tb";
import { MdAssignmentInd } from "react-icons/md";
function Navbar() {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".user-menu")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="bg-secondary  flex flex-row justify-between p-[15px]  ">
      <div className="mr-0 lg:mr-[40px] w-[160px] lg:w-[190px]">
        <Link to="/" className="flex items-center gap-3 mt-1 link">
          <img
            src="/assets/home/buyCarIcon.eeb2e066.svg"
            alt="logo"
            className="lg:w-[50px] w-[40px] mb-1"
          />
          <h2 className="font-bold text-4xl text-center text-white">RENTO</h2>
        </Link>
      </div>
      <div className="text-center mt-2 md:hidden hidden  xl:flex">
        <ul className="flex flex-row items-center justify-center  gap-20 font-semibold">
          <li>
            <Link
              to="/Rent"
              className="text-white link hover:text-primary transition-all"
            >
              Rent Car
            </Link>
          </li>
          <li>
            <Link
              to="/whyrento"
              className="text-white link hover:text-primary transition-all"
            >
              Why Rento?
            </Link>
          </li>
          <li>
            <Link
              to="./Export"
              className="text-white link hover:text-primary transition-all"
            >
              Export
            </Link>
          </li>
          <li>
            <Link
              to="/Faq"
              className="text-white link hover:text-primary transition-all"
            >
              Faq
            </Link>
          </li>
          <li>
            <Link
              to="/PostAdd/:id"
              className="text-white link hover:text-primary transition-all"
            >
              Post Ad
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white link hover:text-primary transition-all"
            >
              Contact US
            </Link>
          </li>
        </ul>
      </div>
      <div className=" hidden lg:flex  lg:flex-row relative gap-y-4 items-center">
        <input
          type="text"
          placeholder="search for your car"
          className="rounded-full bg-transparent w-full h-[50px]  border border-assent outline-none pl-[160px] pr-[70px] placeholder:text-white text-white placeholder:font-semibold "
        />
        <button className=" rounded-full rounded-r-none  flex items-center justify-center translate-all  h-[50px] px-[25px] bg-assent text-secondary md:absolute left-0">
          <FaSearch className="text-xl" />
        </button>
      </div>
      <div className="relative user-menu">
        <div
          className="flex items-center justify-center w-12 h-12 border-2 border-primary rounded-full cursor-pointer hover:bg-primary/20 transition-all duration-300 hover:scale-105 group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaRegUserCircle
            size={24}
            className="text-white group-hover:text-primary transition-colors duration-300"
          />
        </div>

        {isOpen && (
          <div className="absolute bg-white mt-2 right-0 top-12 rounded-lg shadow-xl z-50 w-48 overflow-hidden">
            <div className="py-1">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/cars/add"
                    className="flex items-center justify-center  gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <FaCarOn size={20} />
                    <span>Add Cars</span>
                  </Link>
                  <Link
                    to="/cars/mycars"
                    className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <FaCarSide size={20} />
                    <span>My Cars</span>
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  <Link
                    to="/signout"
                    className="flex items-center gap-2 justify-center px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors duration-200"
                  >
                    <IoIosLogIn size={20} />
                    <span>Sign Out</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="flex items-center gap-2 justify-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <TbLogin2 size={20} />
                    Sign In
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  <Link
                    to="/signup"
                    className="flex items-center gap-2 justify-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <MdAssignmentInd size={20} />
                    <span>Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
