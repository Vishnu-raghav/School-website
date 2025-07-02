import axiosInstance from "../utils/axiosInstance.js";

export const loginAdmin = async (email, password) => {
  try {
    const res = await axiosInstance.post("/admin/login", {
      email,
      password,
    });

    const { accessToken, refreshToken } = res.data.data;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return res.data;
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    throw err;
  }
};
