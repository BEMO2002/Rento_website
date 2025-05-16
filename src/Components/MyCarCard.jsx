import { toast } from "react-toastify";
import Api from "../Api";
import { Link } from "react-router";
const MyCarCard = ({ car, Rerender }) => {
  const api = new Api();

  const handleDelete = async () => {
    try {
      await api.Cars.Delete(car.id);
      toast.success(`deleted ${car.name} successfully!`);
      Rerender();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div
        key={car.id}
        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{car.name}</h2>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">Model:</span> {car.model} (
              {car.year})
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Color:</span> {car.color}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Transmission:</span>{" "}
              {car.transmission}
            </p>
            <div className="flex justify-between mt-4 pt-4 border-t">
              <div className="text-primary font-bold">${car.dailyRate}/day</div>
              <div className="text-secondary font-bold">
                ${car.weeklyRate}/week
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Link
              // onClick={() => setShowRentalForm(true)}
              to={"/postAdd/" + car.id}
              className="flex-1 bg-secondary text-center text-white px-4 py-2 rounded hover:bg-primary transition-colors duration-300"
            >
              Publish Now
            </Link>
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-300">
              Details
            </button>
            <button
              className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-100 transition-colors duration-300"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCarCard;
