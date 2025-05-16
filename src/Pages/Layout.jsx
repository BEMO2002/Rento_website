import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { MobileNav } from "../Components/MobileNav";
import { SocialLinks } from "../Components/SocialLinks";
import { Top } from "../Components/Top";
import { Offer } from "../Components/Offer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <SocialLinks />
      <Top />
      <Offer />
      <MobileNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
