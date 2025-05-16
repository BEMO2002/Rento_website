import { useEffect, useRef, useState } from "react";
import Api from "../../Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AddCar = () => {
  var inFile = useRef(null);
  var imgEle = useRef(null);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const api = new Api();
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    Image: null,
    Name: "",
    Color: "",
    Model: "",
    Year: "",
    Transmission: "",
    PurchaseDate: "",
    WeeklyRate: "",
    DailyRate: "",
    Description: "",
    BrandId: "",
    CategoryId: "",
  });

  useEffect(() => {
    (async () => {
      try {
        let categories = await api.Categories.GetAll();

        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let brands = await api.Brands.GetAll();

        setBrands(brands);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const loadFile = (ev) => {
    if (ev.target.files) {
      setFormData({ ...formData, Image: ev.target.files[0] });
    }

    imgEle.current.src = URL.createObjectURL(ev.target.files[0]);
  };

  const submitHandler = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    try {
      await api.Cars.Create(formData);

      toast.success(`Car has been created successfully`);
      navigator("/cars/mycars");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-secondary px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Add Car</h1>
            <p className="text-blue-100">Please fill in all required fields</p>
          </div>

          <form
            onSubmit={submitHandler}
            id="vehicleForm"
            className="p-6 space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Basic Information
              </h2>

              <div>
                <label
                  htm="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Vehicle Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.Name}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  onChange={(ev) =>
                    setFormData({ ...formData, Name: ev.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Vehicle Image*
                </label>
                <div className="mt-1">
                  <div className="w-full aspect-[2/1] max-h-64 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                    <img
                      ref={imgEle}
                      src="https://placehold.co/1024x512?text=Car+Placeholder"
                      className="w-full h-full object-cover"
                      alt="Vehicle placeholder"
                    />
                  </div>
                  <div className="mt-2 flex">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      className="hidden"
                      accept="image/*"
                      required
                      ref={inFile}
                      onChange={loadFile}
                    />
                    <label
                      htmlFor="image"
                      className="cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Choose Image
                    </label>
                    <span className="ml-2 text-sm text-gray-500 self-center">
                      JPEG, PNG (Max 5MB)
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="color"
                  className="block text-sm font-medium text-gray-700"
                >
                  Color*
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="color"
                    name="color"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                    placeholder="Red"
                    value={formData.Color}
                    onChange={(ev) =>
                      setFormData({ ...formData, Color: ev.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Vehicle Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modelYear"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Model Year*
                  </label>
                  <input
                    type="number"
                    name="modelYear"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                    value={formData.Year}
                    onChange={(ev) =>
                      setFormData({ ...formData, Year: ev.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="model"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Model
                  </label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    required
                    onChange={(ev) =>
                      setFormData({ ...formData, Model: ev.target.value })
                    }
                    value={formData.Model}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border"
                    placeholder="e.g., Civic, Model 3"
                  />
                </div>
                <div>
                  <label
                    htmlFor="transmission"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Transmission*
                  </label>
                  <select
                    id="transmission"
                    name="transmission"
                    required
                    value={formData.Transmission}
                    onChange={(ev) =>
                      setFormData({
                        ...formData,
                        Transmission: ev.target.value,
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  >
                    <option value="" hidden>
                      Select Transmission
                    </option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                    <option value="Semi-Automatic">Semi-Automatic</option>
                    <option value="CVT">CVT</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="brandId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Brand*
                  </label>
                  <select
                    id="brandId"
                    name="brandId"
                    required
                    value={formData.BrandId}
                    onChange={(ev) =>
                      setFormData({ ...formData, BrandId: ev.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  >
                    <option hidden>Select Brand</option>
                    {brands.map((b) => (
                      <option value={b.id} key={b.id}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="categoryId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category*
                  </label>
                  <select
                    id="categoryId"
                    name="categoryId"
                    required
                    value={formData.CategoryId}
                    onChange={(ev) =>
                      setFormData({ ...formData, CategoryId: ev.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  >
                    <option value="" hidden>
                      Select Category
                    </option>
                    {categories.map((c) => (
                      <option value={c.id} key={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Rental Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="purchaseDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Purchase Date*
                  </label>
                  <input
                    type="date"
                    id="purchaseDate"
                    name="purchaseDate"
                    required
                    value={formData.PurchaseDate}
                    onChange={(ev) =>
                      setFormData({
                        ...formData,
                        PurchaseDate: ev.target.value,
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>

                <div>
                  <label
                    htmlFor="weeklyRate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Weekly Rate*
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      id="weeklyRate"
                      name="weeklyRate"
                      step="0.01"
                      min="0"
                      required
                      value={formData.WeeklyRate}
                      onChange={(ev) =>
                        setFormData({
                          ...formData,
                          WeeklyRate: ev.target.value,
                        })
                      }
                      className="block w-full pl-7 pr-12 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="dailyRate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Daily Rate ($)*
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      id="dailyRate"
                      name="dailyRate"
                      step="0.01"
                      min="0"
                      required
                      value={formData.DailyRate}
                      onChange={(ev) =>
                        setFormData({ ...formData, DailyRate: ev.target.value })
                      }
                      className="block w-full pl-7 pr-12 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={formData.Description}
                onChange={(ev) =>
                  setFormData({ ...formData, Description: ev.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              ></textarea>
            </div>

            <div className="flex justify-end space-x-4 pt-4 border-t">
              <button
                type="button"
                id="cancelButton"
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-primary"
                }`}
              >
                {loading ? "Submitting..." : "Save Vehicle"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCar;
