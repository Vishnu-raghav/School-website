import axiosInstance from "../utils/axiosInstance.js";

export const getCurrentAdmin = async () => {
  try {
    const res = await axiosInstance.get("/admin/current-admin");
    return res.data.data;
  } catch (err) {
    console.error("Error fetching current admin:", err.response?.data || err.message);
    throw err;
  }
};
