import { Link } from "react-router";
import { FaTools } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
export const SocialLinks = () => {
  return (
    <div className="fixed right-0 top-[35%] translate-y-[50%] z-50 flex flex-col gap-0">
      <div>
        <Link to="mb-0">
          <FaTools className="p-2 text-[40px] text-[#fff] bg-[#000] cursor-pointer" />
        </Link>
      </div>
      <div>
        <Link to="">
          <IoSettings className="p-2 text-[40px] text-[#fff] bg-[#075e54] cursor-pointer" />
        </Link>
      </div>
      <div>
        <Link to="">
          <RiCustomerService2Line className="p-2 text-[40px] text-[#fff] bg-red-800 cursor-pointer" />
        </Link>
      </div>
      <div>
        <Link to="">
          <FaCar className="p-2 text-[40px] text-[#fff] bg-secondary cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};
