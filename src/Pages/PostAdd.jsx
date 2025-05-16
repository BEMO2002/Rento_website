import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Api from "../Api";
import { toast } from "react-toastify";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../Framermotion/varient";
const PostAdd = () => {
  const carId = useParams().id;
  const [carPhotos, setCarPhotos] = useState([]);
  const [loading, setLoading] = useState(false); // <-- loading state added
  const [formData, setFormData] = useState({
    carId: carId,
    FrontIdImage: null,
    BackIdImage: null,
  });

  const api = new Api();

  useEffect(() => {
    setFormData({
      ...formData,
      FrontIdImage: carPhotos[0]?.file,
      BackIdImage: carPhotos[1]?.file,
    });
  }, [carPhotos]);

  const handleCarPhotosChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 2);
    const photoPreviews = [];

    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          photoPreviews.push({
            url: e.target.result,
            file: file,
          });

          if (photoPreviews.length === files.length) {
            setCarPhotos(photoPreviews);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeCarPhoto = (index) => {
    const updatedPhotos = [...carPhotos];
    updatedPhotos.splice(index, 1);
    setCarPhotos(updatedPhotos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const res = await api.Ads.Create(formData);
      console.log(res);
      toast.success("created ad request successfully");
    } catch (error) {
      console.log(formData);
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="pt-24 pb-24 ">
      <div className="container mx-auto px-4">
        <h2 className="flex items-center justify-center gap-3 text-4xl font-bold text-center mb-10 text-secondary">
          <span>Post Your Ad </span>
          <BsFillPostcardHeartFill />
        </h2>
        <motion.form
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-9 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Your Id Card*
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="carPhotos"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <i className="ri-upload-cloud-2-line text-4xl text-gray-500 mb-2"></i>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    Upload Your Id Photo (Front & Back)
                  </p>
                </div>
                <input
                  id="carPhotos"
                  type="file"
                  className="hidden"
                  multiple
                  accept="image/*"
                  required
                  onChange={handleCarPhotosChange}
                />
              </label>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
              {carPhotos.map((photo, index) => (
                <div key={index} className="relative">
                  <img
                    src={photo.url}
                    alt={`Car preview ${index}`}
                    className="w-full h-50 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 bg-red-600 text-white rounded w-[40px] flex items-center justify-center hover:bg-red-700"
                    onClick={() => removeCarPhoto(index)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6 bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4 text-secondary text-right">
              إقرار وتعهد
            </h3>
            <div className="text-gray-700 text-right" dir="rtl">
              أقر أنا الموقع أدناه{" "}
              <span className="name-placeholder font-bold">_____________</span>
              بأنني أتحمل المسؤولية الكاملة عن سيارة{" "}
              <span className="car-placeholder font-bold">_____________</span>
              وأتعهد بتحمل كافة التكاليف والإصلاحات في حالة حدوث أي أضرار أو
              حوادث أثناء فترة الإيجار.
              <br />
              كما أتعهد بالآتي:
              <ul className="list-disc list-inside space-y-2 mr-4 mb-4">
                <li>الإبلاغ الفوري عن أي أعطال أو مشاكل</li>
                <li>عدم إجراء أي تعديلات على السيارة</li>
                <li>الالتزام بشروط وقواعد الاستخدام</li>
                <li>إرجاع السيارة في الموعد المحدد وبحالة جيدة</li>
              </ul>
              <div className="mt-6">
                التاريخ:{" "}
                <span className="date-placeholder">______________</span>
                <br />
                التوقيع: ______________
              </div>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-primary"
              >
                <i className="ri-printer-line ml-2"></i>
                طباعة الإقرار
              </button>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-primary"
              }`}
            >
              {loading ? "Submitting..." : "Submit Add"}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default PostAdd;
