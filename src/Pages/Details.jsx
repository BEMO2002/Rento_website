import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { toast } from "react-toastify";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rentalForm, setRentalForm] = useState({
    name: "",
    pickupDate: "",
    returnDate: "",
  });

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(
          `https://rento.runasp.net/api/cars/${id}`
        );
        setCar(response.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to fetch car details"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRentalForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (new Date(rentalForm.returnDate) < new Date(rentalForm.pickupDate)) {
      toast.error("Return date must be after pickup date");
      setIsSubmitting(false);
      return;
    }

    try {
      await axios.post("https://rento.runasp.net/api/rentals", {
        carId: id,
        name: rentalForm.name,
        pickupDate: rentalForm.pickupDate,
        returnDate: rentalForm.returnDate,
      });

      toast.success("Rental request submitted successfully!");
      navigate("/rent");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Failed to submit rental request";
      toast.error(errorMessage);
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 max-w-md">
          You Must login First Sorry😅
        </div>
        <button
          onClick={() => navigate("/signin")}
          className="px-4 py-2 bg-secondary text-white rounded hover:bg-primary transition-colors duration-300"
        >
          Back to Login Page
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/rent")}
        className="mb-6 flex items-center text-white bg-secondary p-2 rounded hover:bg-primary transition-colors duration-300"
      >
        <HiOutlineArrowLongLeft className="mr-2" size={24} />
        Back to Cars
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={car.image}
            alt={`${car.brand.name} ${car.name}`}
            className="w-full h-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/600x400?text=Car+Image+Not+Available";
            }}
          />
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Daily Rate</p>
              <p className="text-xl font-bold text-blue-900">
                ${car.dailyRate}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Weekly Rate</p>
              <p className="text-xl font-bold text-blue-900">
                ${car.weeklyRate}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Color</p>
              <p className="font-medium">{car.color}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Transmission</p>
              <p className="font-medium">{car.transmission}</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">
            {car.brand.name} {car.name}
          </h1>
          <p className="text-gray-600 mb-4">
            {car.model} • {car.year}
          </p>

          <div className="mb-6">
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                car.statusName === "Available"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {car.statusName}
            </span>
          </div>

          <p className="text-gray-700 mb-8">{car.description}</p>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold mb-4">Rental Information</h2>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={rentalForm.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="pickupDate">
                Pickup Date
              </label>
              <input
                type="date"
                id="pickupDate"
                name="pickupDate"
                value={rentalForm.pickupDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split("T")[0]} // Disable past dates
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="returnDate">
                Return Date
              </label>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                value={rentalForm.returnDate}
                onChange={handleInputChange}
                min={
                  rentalForm.pickupDate ||
                  new Date().toISOString().split("T")[0]
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-secondary hover:bg-primary text-white py-3 px-4 rounded-md transition-colors duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Processing..." : "Confirm Rental"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
