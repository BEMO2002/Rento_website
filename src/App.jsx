import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Pages/Layout";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import { Signout } from "./Pages/Signout";
import { Home } from "./Pages/Home";
import { WhyRento } from "./Pages/WhyRento";
import { Export } from "./Pages/Export";
import { Faq } from "./Pages/Faq";
import PostAdd from "./Pages/PostAdd";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { NotFound } from "./Pages/NotFound";
import AddCar from "./Pages/Cars/AddCar";
import CarsLayout from "./Pages/Cars/CarsLayout";
import MyCars from "./Pages/Cars/MyCars";
import ContactUs from "./Pages/ContactUs";
import Table from "./Pages/Dashboard/Table";
import DashLayout from "./Pages/Dashboard/DashLayout";
import RentCar from "./Pages/RentCar";
import Details from "./Pages/Details";
import ReservLayout from "./Pages/ReservationLayout.jsx/ReservLayout";
import Reservations from "./Pages/ReservationLayout.jsx/Reservations";
import Brands from "./Pages/Dashboard/Brands";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/whyrento" element={<WhyRento />} />
          <Route path="/Export" element={<Export />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route>
            <Route path="/rent" element={<RentCar />} />
            <Route path="/details/:id" element={<Details />} />
          </Route>
          <Route
            path="/PostAdd/:id"
            element={
              <ProtectedRoute>
                <PostAdd />
              </ProtectedRoute>
            }
          />
          <Route path="cars" element={<CarsLayout />}>
            <Route path="add" element={<AddCar />} />
            <Route path="MyCars" element={<MyCars />} />
          </Route>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/" element={<DashLayout />}>
          <Route path="/table" element={<Table />} />
          <Route path="/brands" element={<Brands />} />
        </Route>
        <Route path="/res" element={<ReservLayout />}>
          <Route index element={<Reservations />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
