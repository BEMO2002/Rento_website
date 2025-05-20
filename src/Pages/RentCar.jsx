import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaCar,
  FaPalette,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaUndo,
  FaCalendarAlt,
  FaGasPump,
  FaCogs,
} from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import { MdDirectionsCar } from "react-icons/md";

const RentCar = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useState({
    search: "",
    color: "",
    transmission: "",
    weeklyRate: "",
  });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const queryParams = new URLSearchParams();
        if (searchParams.search)
          queryParams.append("search", searchParams.search);
        if (searchParams.color) queryParams.append("color", searchParams.color);
        if (searchParams.transmission)
          queryParams.append("transmission", searchParams.transmission);
        if (searchParams.weeklyRate)
          queryParams.append("weeklyRate", searchParams.weeklyRate);

        const url = `https://rento.runasp.net/api/cars?${queryParams.toString()}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }
        const data = await response.json();
        setCars(data);
        setFilteredCars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCarRentClick = (carId) => {
    navigate(`/details/${carId}`);
  };

  const resetFilters = () => {
    setSearchParams({
      search: "",
      color: "",
      transmission: "",
      weeklyRate: "",
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
        <p className="text-gray-600 text-lg">Loading available cars...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-md rounded shadow">
          <div className="flex items-center">
            <div className="py-1">
              <svg
                className="w-6 h-6 mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="font-bold">Error Loading Cars</p>
              <p>{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
          <MdDirectionsCar className="mr-3 text-blue-900" />
          Available Cars for Rent
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse our premium collection of vehicles and find the perfect match
          for your journey
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-100">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-0 md:grid md:grid-cols-5 md:gap-6"
        >
          <div>
            <label
              htmlFor="search"
              className=" text-sm font-medium text-gray-700 mb-2 flex items-center"
            >
              <FaSearch className="mr-2 text-blue-900" />
              Search
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                name="search"
                value={searchParams.search}
                onChange={handleInputChange}
                placeholder="Brand or model"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
              <FaCar className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          <div>
            <label
              htmlFor="color"
              className=" text-sm font-medium text-gray-700 mb-2 flex items-center"
            >
              <FaPalette className="mr-2 text-blue-900" />
              Color
            </label>
            <div className="relative">
              <select
                id="color"
                name="color"
                value={searchParams.color}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent appearance-none"
              >
                <option value="">All Colors</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Silver">Silver</option>
              </select>
              <div className="absolute left-3 top-3 text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="transmission"
              className=" text-sm font-medium text-gray-700 mb-2 flex items-center"
            >
              <FaExchangeAlt className="mr-2 text-blue-900" />
              Transmission
            </label>
            <div className="relative">
              <select
                id="transmission"
                name="transmission"
                value={searchParams.transmission}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent appearance-none"
              >
                <option value="">All Types</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
                <option value="Semi-Automatic">Semi-Automatic</option>
              </select>
              <FaCogs className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          <div>
            <label
              htmlFor="weeklyRate"
              className=" text-sm font-medium text-gray-700 mb-2 flex items-center"
            >
              <FaMoneyBillWave className="mr-2 text-blue-900" />
              Max Weekly Rate
            </label>
            <div className="relative">
              <input
                type="number"
                id="weeklyRate"
                name="weeklyRate"
                value={searchParams.weeklyRate}
                onChange={handleInputChange}
                placeholder="Max price"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
              <span className="absolute left-3 top-3 text-gray-400">EGP</span>
            </div>
          </div>

          <div className="flex items-end space-x-3">
            <button
              type="submit"
              className="px-5 py-2.5 bg-secondary text-white rounded-lg hover:bg-blue-900 focus:outline-none transition-all duration-300 flex items-center"
            >
              <FaSearch className="mr-2" />
              Search
            </button>
            <button
              type="button"
              onClick={resetFilters}
              className="px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none transition-all duration-300 flex items-center"
            >
              <FaUndo className="mr-2" />
              Reset
            </button>
          </div>
        </form>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <p className="text-gray-600 font-medium flex items-center">
          <FaCar className="mr-2 text-blue-900" />
          Showing {filteredCars.length}{" "}
          {filteredCars.length === 1 ? "car" : "cars"}
        </p>
        {filteredCars.length > 0 && (
          <div className="text-sm text-gray-500">
            <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-1"></span>
            Available
            <span className="inline-block w-3 h-3 rounded-full bg-red-500 ml-3 mr-1"></span>
            Booked
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-md overflow-hidden  border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={
                    car.image ||
                    "https://via.placeholder.com/400x225?text=Car+Image"
                  }
                  alt={`${car.brand?.name || ""} ${car.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x225?text=Car+Image";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end">
                  <h2 className="text-white text-2xl font-bold">
                    {car.brand?.name || "Unknown"} {car.name}
                  </h2>
                  <p className="text-gray-200 flex items-center">
                    <span className="mr-2">{car.model}</span>
                    <span className="text-gray-300">•</span>
                    <FaCalendarAlt className="ml-2 mr-1 text-sm" />
                    <span>{car.year}</span>
                  </p>
                </div>
                <span
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold flex items-center ${
                    car.statusName === "Available"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {car.statusName === "Available" ? (
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                  {car.statusName}
                </span>
              </div>

              <div className="p-5">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaPalette className="mr-2 text-primary" size={18} />
                    <span>{car.color}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaExchangeAlt className="mr-2 text-primary" size={18} />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaGasPump className="mr-2 text-primary" size={18} />
                    <span>{car.fuelType || "N/A"}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <IoMdSpeedometer className="mr-2 text-primary " size={18} />
                    <span>{car.mileage || "N/A"} km</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-5 line-clamp-2">
                  {car.description || "No description available"}
                </p>

                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Daily</p>
                    <p className="text-lg font-bold text-black flex items-center justify-center">
                      <span className="text-sm mr-1">EGP</span>
                      {car.dailyRate || "N/A"}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Weekly</p>
                    <p className="text-lg font-bold text-black flex items-center justify-center">
                      <span className="text-sm mr-1">EGP</span>
                      {car.weeklyRate || "N/A"}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCarRentClick(car.id)}
                    className="bg-secondary  text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center"
                    disabled={car.statusName !== "Available"}
                  >
                    <GiCarKey className="mr-2" />
                    {car.statusName === "Available"
                      ? "Rent Now"
                      : "Unavailable"}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="mx-auto w-48 h-48 mb-6">
              <svg
                className="w-full h-full text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No cars found
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              We couldn't find any cars matching your criteria. Try adjusting
              your filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 bg-secondary text-white rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 inline-flex items-center"
            >
              <FaUndo className="mr-2" />
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RentCar;
