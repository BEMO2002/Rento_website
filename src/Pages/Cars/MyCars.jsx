import { useEffect, useState } from "react";
import Api from "../../Api";
import { Link } from "react-router";
import useTitle from "../../Hooks/UseTitle";
import MyCarCard from "../../Components/MyCarCard";

const MyCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  const api = new Api();

  useTitle("My Cars");

  useEffect(() => {
    (async () => {
      try {
        let cars = await api.Cars.GetMyCars();
        setCars(cars);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [refreshKey]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Cars</h1>
        <Link
          to="/cars/add"
          className="bg-secondary hover:bg-primary text-white px-4 py-2 rounded-md transition-all duration-300"
        >
          Add New Car
        </Link>
      </div>
      {cars.length == 0 ? (
        <div className="mx-auto flex items-center justify-center">
          <img src="/assets/download (2).webp" alt="" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <MyCarCard
              car={car}
              key={car.id}
              Rerender={() => setRefreshKey(refreshKey + 1)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCars;
