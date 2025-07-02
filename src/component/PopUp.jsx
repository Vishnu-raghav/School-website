import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance.js";

const Popup = () => {
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const fetchPopups = async () => {
      try {
        const res = await axiosInstance.get("/popup");
        const activeImages = res.data.data.filter((img) => img.isActive);
        setImages(activeImages);
        setVisible(Array(activeImages.length).fill(true));
        document.body.style.overflow = "hidden";
      } catch (err) {
        console.error("Popup images fetch failed", err);
      }
    };

    fetchPopups();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closePopup = (index) => {
    const updated = [...visible];
    updated[index] = false;
    setVisible(updated);

    if (updated.every((v) => !v)) {
      document.body.style.overflow = "auto";
    }
  };

  if (images.length === 0 || visible.every((v) => !v)) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm overflow-hidden flex justify-center items-center px-2 sm:px-4">
      {/* Desktop View */}
      <div className="hidden md:flex gap-8 max-w-7xl w-full justify-center items-center py-12 flex-wrap">
        {images.map(
          (img, index) =>
            visible[index] && (
              <div
                key={img._id}
                className="relative bg-white border border-gray-300 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.3)] w-full md:w-[45%] mb-6"
              >
                <button
                  onClick={() => closePopup(index)}
                  className="absolute top-2 right-4 z-20 text-3xl text-gray-700"
                >
                  &times;
                </button>
                <img
                  src={img.imageUrl}
                  alt={`Popup ${index + 1}`}
                  className="w-full h-[80vh] object-contain rounded-b-2xl"
                />
              </div>
            )
        )}
      </div>

      {/* Mobile View */}
      <div className="relative flex md:hidden w-full max-w-md justify-center items-center py-8">
        {images.map(
          (img, index) =>
            visible[index] && (
              <div
                key={img._id}
                className="absolute inset-0 z-20 flex justify-center items-center"
              >
                <div className="relative bg-white border border-gray-300 rounded-2xl shadow-lg w-[95%]">
                  <button
                    onClick={() => closePopup(index)}
                    className="absolute top-2 right-4 z-20 text-3xl text-gray-700"
                  >
                    &times;
                  </button>
                  <img
                    src={img.imageUrl}
                    alt={`Popup ${index + 1}`}
                    className="w-full h-[85vh] object-contain rounded-b-2xl"
                  />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Popup;
