import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance.js";

function PopUpImageManager() {
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [togglingId, setTogglingId] = useState(null);

  const fetchImages = async () => {
    try {
      const res = await axiosInstance.get("/popup");
      setImages(res.data.data || []);
    } catch (err) {
      console.error("Error fetching popup images:", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!imageFile) return;

    setIsUploading(true);

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      await axiosInstance.post("/popup/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImageFile(null);
      setPreviewUrl(null);
      await fetchImages();
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      await axiosInstance.delete(`/popup/${id}`);
      await fetchImages();
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggle = async (id) => {
    setTogglingId(id);
    try {
      await axiosInstance.patch(`/popup/toggle/${id}`);
      await fetchImages();
    } catch (err) {
      console.error("Toggle error:", err);
    } finally {
      setTogglingId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-900 flex items-center gap-3">
        🎯 Pop-Up Image Manager
      </h2>

      <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Select Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border px-4 py-2 rounded-lg"
            disabled={isUploading}
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isUploading || !imageFile}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
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
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            Upload Pop-Up Image
          </button>
        </div>
      </form>

      {previewUrl && (
        <div className="mb-12 max-w-md mx-auto rounded-xl overflow-hidden shadow-md border border-gray-300">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-64 object-contain bg-gray-50"
          />
          <p className="text-center p-2 text-gray-600 font-medium">Preview</p>
        </div>
      )}

      <h3 className="text-3xl font-semibold mb-6 text-blue-900 flex items-center gap-2">
        🖼️ Uploaded Pop-Up Images
      </h3>

      {images.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No pop-up images uploaded yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((img) => (
            <div
              key={img._id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col"
            >
              <img
                src={img.imageUrl}
                alt="popup"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Status:{" "}
                    <span className={img.isActive ? "text-green-600" : "text-red-600"}>
                      {img.isActive ? "Active" : "Inactive"}
                    </span>
                  </span>
                </div>

                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => handleToggle(img._id)}
                    disabled={togglingId === img._id}
                    className="flex-1 bg-yellow-500 text-white text-sm py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    🔁 {img.isActive ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    onClick={() => handleDelete(img._id)}
                    disabled={deletingId === img._id}
                    className="flex-1 bg-red-500 text-white text-sm py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    ❌ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PopUpImageManager;
