import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance.js";

function InfastructureImageManager() {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const fetchImages = async () => {
    try {
      const res = await axiosInstance.get("/infrastructure");
      setImages(res.data.data || []);
    } catch (err) {
      console.error("Error fetching infrastructure images:", err);
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
    if (!title || !imageFile) return;

    setIsUploading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", imageFile);

    try {
      await axiosInstance.post("/infrastructure/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setTitle("");
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
      await axiosInstance.delete(`/infrastructure/${id}`);
      await fetchImages();
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-900 flex items-center gap-3">
        🏗️ Infrastructure Manager
      </h2>

      <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
            disabled={isUploading}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Image</label>
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
            Upload Image
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
        🖼️ Uploaded Infrastructure Images
      </h3>

      {images.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No images uploaded yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((img) => (
            <div
              key={img._id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h4 className="text-md font-bold text-gray-800">{img.title}</h4>

                <button
                  onClick={() => handleDelete(img._id)}
                  disabled={deletingId === img._id}
                  className="mt-4 bg-red-500 text-white text-sm font-semibold py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {deletingId === img._id && (
                    <svg
                      className="animate-spin h-4 w-4 text-white"
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
                  ❌ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InfastructureImageManager;
