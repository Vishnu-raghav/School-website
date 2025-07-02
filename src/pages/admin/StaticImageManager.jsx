import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance.js";

function StaticImageManager() {
  const [selectedSection, setSelectedSection] = useState("HeroSection");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  const [isUploading, setIsUploading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const sectionOptions = [
    "HeroSection",
    "WhyUs",
    "AboutUs",
    "FooterImage",
    "PrincipleImage",
    "DirectorImage",
  ];

  const fetchImages = async () => {
    try {
      const res = await axiosInstance.get("/static");
      setUploadedImages(res.data.data || []);
    } catch (err) {
      console.error("Error fetching static images:", err);
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
    formData.append("section", selectedSection);

    try {
      await axiosInstance.post("/static/upload", formData, {
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
      await axiosInstance.delete(`/static/${id}`);
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
        <span>🖼️</span> Static Image Manager
      </h2>

      {/* Upload Form */}
      <form
        onSubmit={handleUpload}
        className="flex flex-col md:flex-row md:items-end gap-6 mb-12"
      >
        <div className="flex-1">
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Select Section
          </label>
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            disabled={isUploading}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition disabled:opacity-50"
          >
            {sectionOptions.map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Choose Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            disabled={isUploading}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={!imageFile || isUploading}
          className={`flex-shrink-0 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
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
          🚀 {isUploading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {/* Preview */}
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

      <hr className="my-8 border-gray-300" />

      {/* Uploaded Images */}
      <h3 className="text-3xl font-semibold mb-8 text-blue-900 flex items-center gap-3">
        <span>📦</span> Uploaded Images
      </h3>

      {uploadedImages.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No static images uploaded yet.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {uploadedImages.map((img) => (
            <div
              key={img._id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col"
            >
              <img
                src={img.imageUrl}
                alt={img.section}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4 flex flex-col flex-grow">
                <span className="inline-block text-xs font-semibold text-white bg-blue-600 px-4 py-1 rounded-full mb-4 w-max">
                  {img.section}
                </span>
                <button
                  onClick={() => handleDelete(img._id)}
                  disabled={deletingId === img._id}
                  className="mt-auto bg-red-500 text-white text-sm font-semibold py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StaticImageManager;
