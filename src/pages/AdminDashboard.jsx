import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GalleryImageManager from "./admin/GalleryImageManager.jsx";
import PopUpImageManager from "./admin/PopUpImageManager.jsx";
import AdminCredentialUpdater from "./admin/AdminCredentialUpdater.jsx";

const sections = [
  { key: "gallery", title: "Gallery Image Manager", Component: GalleryImageManager },
  { key: "popup", title: "Popup Image Manager", Component: PopUpImageManager },
  { key: "admin", title: "Admin Credential Manager", Component: AdminCredentialUpdater },
];

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("gallery"); 
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") navigate("/admin/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin-access-2025");
  };

  const active = sections.find((s) => s.key === activeSection) || sections[0]; 

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <div
        className={`fixed md:static z-30 bg-white shadow-lg md:shadow-none w-64 h-full p-6 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.key}>
              <button
                onClick={() => {
                  setActiveSection(section.key);
                  setSidebarOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium ${
                  activeSection === section.key
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 rounded-lg font-medium bg-red-500 text-white hover:bg-red-600 mt-4"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
        <div className="md:hidden flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-blue-800">Admin Panel</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-blue-600 text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-1">{active.title}</h2>
          <p className="text-gray-600 text-sm">
            Logged in as{" "}
            <span className="font-medium">{localStorage.getItem("adminEmail")}</span>
          </p>
        </div>

        <div className="bg-white border shadow-md rounded-xl p-4 md:p-6">
          <active.Component />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
