import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance.js";

function ContactDetailManager() {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    address: "",
    facebook: "",
    instagram: "",
    youtube: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const fetchContactDetail = async () => {
    try {
      const res = await axiosInstance.get("/contact");
      if (res.data?.data) setFormData(res.data.data);
    } catch (err) {
      console.error("Error fetching contact details:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContactDetail();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone || !formData.email) return;

    setIsSaving(true);
    try {
      await axiosInstance.post("/contact/update", formData);
      await fetchContactDetail();
    } catch (err) {
      console.error("Update failed:", err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-900 flex items-center gap-3">
        📞 Contact Detail Manager
      </h2>

      {isLoading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Phone *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              disabled={isSaving}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              disabled={isSaving}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1 text-gray-700">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              rows={2}
              disabled={isSaving}
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Facebook</label>
            <input
              type="url"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              disabled={isSaving}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Instagram</label>
            <input
              type="url"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              disabled={isSaving}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1 text-gray-700">YouTube</label>
            <input
              type="url"
              name="youtube"
              value={formData.youtube}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              disabled={isSaving}
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSaving}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50"
            >
              {isSaving && (
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
              Save Contact Details
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactDetailManager;
