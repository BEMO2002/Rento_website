import React from "react";
import { Outlet } from "react-router";
import { ProtectedRoute } from "../../Components/ProtectedRoute";
import Navbar from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { MobileNav } from "../../Components/MobileNav";
import { SocialLinks } from "../../Components/SocialLinks";
import { Top } from "../../Components/Top";
const ReservLayout = () => {
  return (
    <ProtectedRoute>
      <Navbar />
      <MobileNav />
      <SocialLinks />
      <Outlet />
      <Top />
      <Footer />
    </ProtectedRoute>
  );
};

export default ReservLayout;
