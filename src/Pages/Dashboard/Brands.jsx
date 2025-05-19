import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Brands = () => {
  // State management
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBrand, setNewBrand] = useState({
    name: "",
    description: "",
    image: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // JWT Token for authentication
  const token =
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiZTY0MGY4Zi1kYmRiLTRjZTAtYWNiZi1hMDUzNGVhOTM4NjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc0ODI4ODQ0NSwiaXNzIjoiaHR0cHM6Ly9yZW50by5ydW5hc3AubmV0In0.2Ze3rktZhZzV0Yt3O_A49H5hF7c3CW0y4I7McyODkRe5r670Z7yJ9mN28ZSrWmHlj-s_nhryF2KwJoYF6-VfeQ";

  // Fetch brands on component mount
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(
          "https://rento.runasp.net/api/admin/brands",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBrands(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching brands:", err);
      }
    };

    fetchBrands();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBrand((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    setNewBrand((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("Name", newBrand.name);
      formData.append("Description", newBrand.description);
      if (newBrand.image) {
        formData.append("Image", newBrand.image);
      }

      const response = await axios.post(
        "https://rento.runasp.net/api/admin/brands",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBrands((prev) => [...prev, response.data]);
      setIsModalOpen(false);
      setNewBrand({
        name: "",
        description: "",
        image: null,
      });
      toast.success("Brand added successfully!");
    } catch (err) {
      console.error("Error adding brand:", err);
      setError(
        err.response?.data?.message || "Failed to add brand. Please try again."
      );
      toast.error("Failed to add brand");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle brand deletion
  const handleDelete = async (brandId) => {
    try {
      await axios.delete(
        `https://rento.runasp.net/api/admin/brands/${brandId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBrands((prev) => prev.filter((brand) => brand.id !== brandId));
      setDeleteConfirm(null);
      toast.success("Brand deleted successfully!");
    } catch (err) {
      console.error("Error deleting brand:", err);
      toast.error("Failed to delete brand");
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // Error state
  if (error && !isModalOpen) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
        <p>Error loading brands: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Brands</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary transition-colors duration-300"
        >
          Add New Brand
        </button>
      </div>

      {/* Add Brand Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Add New Brand
                </h2>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setError(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 mb-4">
                  <p>{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Brand Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newBrand.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={newBrand.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="image"
                  >
                    Brand Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    accept="image/*"
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setError(null);
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-secondary text-white rounded-md disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Saving...
                      </span>
                    ) : (
                      "Save Brand"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Confirm Deletion
              </h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this brand? This action cannot
                be undone.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Brands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.length > 0 ? (
          brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={
                    brand.image ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={brand.name}
                  className="h-full w-full object-contain p-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-800">
                    {brand.name}
                  </h2>
                  <span className="text-xs text-gray-500">
                    {new Date(brand.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {brand.description}
                </p>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setDeleteConfirm(brand.id)}
                    className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-sm hover:bg-red-200 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">No brands found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;
