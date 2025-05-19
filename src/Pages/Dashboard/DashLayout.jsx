import { Outlet } from "react-router";
import { ProtectedRoute } from "../../Components/ProtectedRoute";
import { SideBar } from "./SideBar";
import Header from "./Header";

const DashLayout = () => {
  return (
    <ProtectedRoute>
      <Header />
      <SideBar />
      <Outlet />
    </ProtectedRoute>
  );
};

export default DashLayout;
