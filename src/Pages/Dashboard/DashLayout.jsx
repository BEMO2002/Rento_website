import { Outlet } from "react-router";
import { ProtectedRoute } from "../../Components/ProtectedRoute";
import Navbar from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { MobileNav } from "../../Components/MobileNav";

const DashLayout = () => {
  return (
    <ProtectedRoute>
      <Navbar />
      <MobileNav />
      <Outlet />
      <Footer />
    </ProtectedRoute>
  );
};

export default DashLayout;
