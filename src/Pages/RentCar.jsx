import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const RentCar = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log(cars);
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
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Available Cars for Rent
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-0 md:grid md:grid-cols-5 md:gap-4"
        >
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Search
            </label>
            <input
              type="text"
              id="search"
              name="search"
              value={searchParams.search}
              onChange={handleInputChange}
              placeholder="Brand or model"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="color"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Color
            </label>
            <select
              id="color"
              name="color"
              value={searchParams.color}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Colors</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Silver">Silver</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="transmission"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Transmission
            </label>
            <select
              id="transmission"
              name="transmission"
              value={searchParams.transmission}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Types</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="weeklyRate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Max Weekly Rate
            </label>
            <input
              type="number"
              id="weeklyRate"
              name="weeklyRate"
              value={searchParams.weeklyRate}
              onChange={handleInputChange}
              placeholder="Max price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-end space-x-2">
            <button
              type="submit"
              className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary focus:outline-none duration-500"
            >
              Search
            </button>
            <button
              type="button"
              onClick={resetFilters}
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none duration-500"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      <div className="mb-4">
        <p className="text-gray-600 font-semibold">
          Showing {filteredCars.length}{" "}
          {filteredCars.length === 1 ? "car" : "cars"}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h2 className="text-white text-xl font-bold">
                    {car.brand.name} {car.name}
                  </h2>
                  <p className="text-gray-200">
                    {car.model} • {car.year}
                  </p>
                </div>
                <span
                  className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${
                    car.statusName === "Available"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {car.statusName}
                </span>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-gray-600">Color:</span>
                    <span className="ml-2 font-medium">{car.color}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Transmission:</span>
                    <span className="ml-2 font-medium">{car.transmission}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{car.description}</p>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Daily Rate</p>
                    <p className="text-lg font-bold text-blue-900">
                      ${car.dailyRate}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Weekly Rate</p>
                    <p className="text-lg font-bold text-blue-d00">
                      ${car.weeklyRate}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCarRentClick(car.id)}
                    className="bg-secondary hover:bg-primary text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="mx-auto text-center flex items-center justify-center mb-4">
              <img src="/public/assets/error.webp" alt="" />
            </div>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary duration-500"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RentCar;
