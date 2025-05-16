import { useEffect, useState } from "react";
import Api from "../../Api";
import { toast } from "react-toastify";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Table = () => {
  const [ads, setAds] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const api = new Api();

  useEffect(() => {
    (async () => {
      try {
        const ads = await api.Ads.GetAll();
        setAds(ads);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleAd = async (carId, statusId) => {
    try {
      await api.Ads.HandleAdRequest(carId, statusId);
      setAds(await api.Ads.GetAll());
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-4 mt-10 mb-10">
      <h1 className="text-2xl font-bold mb-4">Car ID Verifications</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-secondary text-white text-center">
              <th className="py-2 px-4 border">Car ID</th>
              <th className="py-2 px-4 border">Front ID Photo</th>
              <th className="py-2 px-4 border">Back ID Photo</th>
              <th className="py-2 px-4 border">Username</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ads.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border text-center">{item.carId}</td>
                <td className="py-2 px-4 border text-center">
                  <img
                    src={item.images[0].url}
                    alt={`Front ID ${item.carId}`}
                    className="w-20 h-auto mx-auto cursor-pointer"
                    onClick={() => openImageModal(item.images[0].url)}
                  />
                </td>
                <td className="py-2 px-4 border text-center">
                  <img
                    src={item.images[1].url}
                    alt={`Back ID ${item.carId}`}
                    className="w-20 h-auto mx-auto cursor-pointer"
                    onClick={() => openImageModal(item.images[1].url)}
                  />
                </td>
                <td className="py-2 px-4 border text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      item.statusId === "accepted"
                        ? "bg-green-100 text-green-800"
                        : item.statusId === "declined"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {item.statusId}
                  </span>
                </td>
                <td className="py-2 px-4 border text-center">
                  <span className="text-gray-500">{item.statusName}</span>
                </td>
                <td className="py-2 px-4 border text-center">
                  <>
                    <button
                      onClick={() => handleAd(item.id, 2)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mr-2"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleAd(item.id, 3)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Decline
                    </button>
                  </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeImageModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedImage && (
          <div className="flex flex-col items-center">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[80vh]"
            />
            <button
              onClick={closeImageModal}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        )}
      </Modal>

      <style>{`
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 20px;
          border-radius: 8px;
          outline: none;
          max-width: 90%;
          max-height: 90%;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default Table;
