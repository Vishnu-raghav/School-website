import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance.js";

function TopperManager() {
  const [name, setName] = useState("");
  const [topperClass, setTopperClass] = useState("");
  const [percentage, setPercentage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [toppers, setToppers] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const fetchToppers = async () => {
    try {
      const res = await axiosInstance.get("/topper");
      setToppers(res.data.data || []);
    } catch (err) {
      console.error("Error fetching toppers:", err);
    }
  };

  useEffect(() => {
    fetchToppers();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!name || !topperClass || percentage === "" || !imageFile) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("class", topperClass);
    formData.append("percentage", parseFloat(percentage));
    formData.append("image", imageFile);

    try {
      await axiosInstance.post("/topper/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setName("");
      setTopperClass("");
      setPercentage("");
      setImageFile(null);
      setPreviewUrl(null);
      await fetchToppers();
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      await axiosInstance.delete(`/topper/${id}`);
      await fetchToppers();
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-900 flex items-center gap-3">
        🏆 Topper Manager
      </h2>

      <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
            disabled={isUploading}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Class</label>
          <input
            type="text"
            value={topperClass}
            onChange={(e) => setTopperClass(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
            disabled={isUploading}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Percentage</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="100"
            value={percentage}
            onChange={(e) => {
              const val = e.target.value;
              if (val === "" || (parseFloat(val) >= 0 && parseFloat(val) <= 100)) {
                setPercentage(val);
              }
            }}
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
            Upload Topper
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
        🧑‍🎓 Uploaded Toppers
      </h3>

      {toppers.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No toppers uploaded yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {toppers.map((topper) => (
            <div
              key={topper._id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col"
            >
              <img
                src={topper.imageUrl}
                alt={topper.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h4 className="text-md font-bold text-gray-800">{topper.name}</h4>
                <p className="text-sm text-gray-600">Class: {topper.class}</p>
                <p className="text-sm text-gray-600 mb-4">Percentage: {topper.percentage}%</p>

                <button
                  onClick={() => handleDelete(topper._id)}
                  disabled={deletingId === topper._id}
                  className="mt-auto bg-red-500 text-white text-sm font-semibold py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {deletingId === topper._id && (
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

export default TopperManager;
