import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    const email = localStorage.getItem("adminEmail");

    if (isAdmin !== "true" || email !== "vishnur122@gmail.com") {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminEmail");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
      <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-xl p-8 text-center max-w-xl w-full border border-blue-200">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">🎯 Admin Panel</h1>
        <p className="text-gray-700 text-lg mb-6">
          Welcome back, <span className="font-semibold text-blue-700">Vishnu</span>!  
          You are now logged in as administrator.
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium transition"
        >
          🔓 Logout
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
