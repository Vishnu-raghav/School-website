import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Main admin login (only you know)
    if (email === "vishnur122@gmail.com" && password === "vishnu@1225") {
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("adminEmail", email);
      navigate("/admin/dashboard");
    }
    // Future: You can add else-if here for more users
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-5 border border-blue-100"
        autoComplete="off"
      >
        <h2 className="text-2xl font-bold text-center text-blue-800">
          Admin Login
        </h2>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
