import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaUserTie } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";
import { FcAlarmClock, FcOk, FcCancel, FcProcess } from "react-icons/fc";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          "https://rento.runasp.net/api/rentals"
        );
        setReservations(response.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to fetch reservations"
        );
        toast.error("Failed to load reservations");
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  // Function to get status details based on StatusId
  const getStatusDetails = (statusId) => {
    switch (statusId) {
      case 1:
        return {
          text: "Pending",
          icon: <FcAlarmClock className="text-xl" />,
          color: "text-yellow-500",
        };
      case 2:
        return {
          text: "Active",
          icon: <FcProcess className="text-xl" />,
          color: "text-blue-500",
        };
      case 3:
        return {
          text: "Completed",
          icon: <FcOk className="text-xl" />,
          color: "text-green-500",
        };
      case 4:
        return {
          text: "Canceled",
          icon: <FcCancel className="text-xl" />,
          color: "text-red-500",
        };
      default:
        return {
          text: "Unknown",
          icon: <FcAlarmClock className="text-xl" />,
          color: "text-gray-500",
        };
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
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
    <div className="container mx-auto px-4 py-8 mb-10 mt-10">
      <h1 className="text-3xl font-bold mb-8 flex items-center justify-center gap-2">
        Reservations
        <span>
          <FaAddressBook className="text-secondary" />
        </span>
      </h1>

      {reservations.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No reservations found</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden border border-gray-600 shadow-md">
            <thead className="bg-secondary text-white text-center">
              <tr>
                <th className="py-3 px-4 text-left">Customer</th>
                <th className="py-3 px-4 text-left">Image</th>
                <th className="py-3 px-4 text-left">Car</th>
                <th className="py-3 px-4 text-left">Color</th>
                <th className="py-3 px-4 text-left">Transmission</th>
                <th className="py-3 px-4 text-left">Pickup Date</th>
                <th className="py-3 px-4 text-left">Return Date</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-900 ">
              {reservations.map((reservation) => {
                const status = getStatusDetails(reservation.statusId);
                return (
                  <tr key={reservation.id} className="hover:bg-gray-50">
                    <td className="py-4 px-9 mx-auto">
                      <FaUserTie className="text-center text-xl text-secondary" />
                    </td>
                    <td className="py-4 px-9 mx-auto">
                      {reservation.car?.image ? (
                        <img
                          src={reservation.car.image}
                          alt="Car"
                          className="min-w-[100px] w-full max-w-[150px] h-auto rounded object-cover"
                        />
                      ) : (
                        <img
                          src="https://via.placeholder.com/150?text=Image+Not+Available"
                          alt="Car"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {reservation.car?.brand?.name} {reservation.car?.name}
                    </td>
                    <td className="py-4 px-4">
                      {reservation.car?.brand?.color} {reservation.car?.color}
                    </td>
                    <td className="py-4 px-4">
                      {reservation.car?.brand?.transmission}{" "}
                      {reservation.car?.transmission}
                    </td>
                    <td className="py-4 px-4">
                      {new Date(reservation.pickupDate).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      {new Date(reservation.returnDate).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      <div
                        className={`flex items-center gap-2 ${status.color}`}
                      >
                        {status.icon}
                        {status.text}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Reservations;
