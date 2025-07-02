// import { useState } from "react";
// import axiosInstance from "../../api/axiosInstance.js";

// function AdminCredentialUpdater() {
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newEmail, setNewEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!currentPassword.trim() || !newPassword.trim()) {
//       setMessage({ type: "error", text: "Current & New Password are required." });
//       return;
//     }

//     setLoading(true);
//     setMessage(null);

//     try {
//       await axiosInstance.post("/admin/change-credentials", {
//         currentPassword,
//         newEmail,
//         newPassword,
//       });

//       setMessage({ type: "success", text: "Credentials updated! Redirecting..." });
//       localStorage.clear();
//       setTimeout(() => {
//         window.location.href = "/admin/login";
//       }, 1500);
//     } catch (err) {
//       setMessage({
//         type: "error",
//         text: err?.response?.data?.message || "Failed to update credentials.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto bg-white border border-gray-200 shadow-xl rounded-2xl p-8 mt-12">
//       <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
//         🔐 Update Admin Credentials
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
//         <div>
//           <label className="block text-sm font-medium mb-2 text-gray-700">
//             Current Password
//           </label>
//           <input
//             type="password"
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//             autoComplete="new-password"
//             className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
//             disabled={loading}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2 text-gray-700">
//             New Email <span className="text-gray-400">(optional)</span>
//           </label>
//           <input
//             type="email"
//             value={newEmail}
//             onChange={(e) => setNewEmail(e.target.value)}
//             autoComplete="off"
//             className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
//             disabled={loading}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2 text-gray-700">
//             New Password
//           </label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             autoComplete="new-password"
//             className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
//             disabled={loading}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
//         >
//           {loading ? "Updating..." : "🔒 Update Credentials"}
//         </button>
//       </form>

//       {message && (
//         <div
//           className={`mt-6 text-center font-medium px-4 py-2 rounded-lg transition ${
//             message.type === "success"
//               ? "bg-green-100 text-green-700"
//               : "bg-red-100 text-red-700"
//           }`}
//         >
//           {message.text}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminCredentialUpdater;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.js";

function AdminCredentialUpdater() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate(); // ✅ useNavigate added

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentPassword.trim() || !newPassword.trim()) {
      setMessage({ type: "error", text: "Current & New Password are required." });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      await axiosInstance.post("/admin/change-credentials", {
        currentPassword,
        newEmail,
        newPassword,
      });

      setMessage({ type: "success", text: "Credentials updated! Redirecting..." });

      localStorage.clear();

      setTimeout(() => {
        navigate("/admin/login", { replace: true }); // ✅ redirect to login
      }, 1500);
    } catch (err) {
      setMessage({
        type: "error",
        text: err?.response?.data?.message || "Failed to update credentials.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white border border-gray-200 shadow-xl rounded-2xl p-8 mt-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
        🔐 Update Admin Credentials
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Current Password
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            autoComplete="new-password"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            disabled={loading}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            New Email <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            autoComplete="off"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete="new-password"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            disabled={loading}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Updating..." : "🔒 Update Credentials"}
        </button>
      </form>

      {message && (
        <div
          className={`mt-6 text-center font-medium px-4 py-2 rounded-lg transition ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

export default AdminCredentialUpdater;
