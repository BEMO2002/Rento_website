import { Outlet } from "react-router";
import { ProtectedRoute } from "../../Components/ProtectedRoute";

const CarsLayout = () => {
  return (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  );
};

export default CarsLayout;
