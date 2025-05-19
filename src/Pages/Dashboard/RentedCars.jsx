import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaCar,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
} from "react-icons/fa";

const RentedCars = () => {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://rento.runasp.net/api/admin/rentals?pagenumber=${pageNumber}&pagesize=${pageSize}`
        );
        setRentals(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setRentals([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRentals();
  }, [pageNumber, pageSize]);

  const StatusBadge = ({ statusName }) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-semibold";

    if (statusName === "Completed") {
      return (
        <span
          className={`${baseClasses} bg-green-100 text-green-800 flex items-center gap-1`}
        >
          <FaCheckCircle className="inline" /> {statusName}
        </span>
      );
    } else {
      return (
        <span
          className={`${baseClasses} bg-red-100 text-red-800 flex items-center gap-1`}
        >
          <FaTimesCircle className="inline" /> {statusName}
        </span>
      );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-lg">
        Error fetching data: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Rento Car Rentals</h1>
        <p className="text-gray-600">
          Manage and view all car rental transactions
        </p>
      </header>

      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <div>
            <label
              htmlFor="pageSize"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Items per page
            </label>
            <select
              id="pageSize"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
            disabled={pageNumber === 1}
            className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 bg-primary text-white rounded-md">
            Page {pageNumber}
          </span>
          <button
            onClick={() => setPageNumber((prev) => prev + 1)}
            className="px-4 py-2 bg-gray-200 rounded-md"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rentals.map((rental) => (
          <div
            key={rental.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {rental.car.name}
                </h2>
                <StatusBadge statusName={rental.statusName} />
              </div>

              <div className="mb-4">
                <img
                  src={rental.car.image}
                  alt={rental.car.name}
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300?text=Car+Image";
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaCar className="text-blue-500" />
                  <span>
                    {rental.car.model} • {rental.car.year}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: rental.car.color }}
                  ></span>
                  <span>{rental.car.color}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>Transmission:</span>
                  <span className="font-medium">{rental.car.transmission}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>Daily Rate:</span>
                  <span className="font-medium">
                    ${rental.car.dailyRate.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendarAlt className="text-blue-500" />
                    <span>Pickup:</span>
                    <span className="font-medium">
                      {new Date(rental.pickupDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendarAlt className="text-blue-500" />
                    <span>Return:</span>
                    <span className="font-medium">
                      {new Date(rental.returnDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
                    <FaMoneyBillWave className="text-green-500" />
                    <span>Total:</span>
                    <span>${rental.totalPrice.toFixed(2)}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    Booked on {new Date(rental.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {rentals.length === 0 && !loading && (
        <div className="text-center py-12 text-gray-500">
          No rental data available
        </div>
      )}
    </div>
  );
};

export default RentedCars;
