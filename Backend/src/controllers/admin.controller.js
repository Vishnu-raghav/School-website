import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { Admin } from "../models/Admin.model.js";

// 🔐 Generate Tokens
const generateAccessAndRefreshToken = async (adminId) => {
  try {
    const admin = await Admin.findById(adminId);
    const accessToken = admin.generateAccessToken();
    const refreshToken = admin.generateRefreshToken();

    admin.refreshToken = refreshToken;
    await admin.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Failed to generate tokens");
  }
};

// ✅ Admin Login
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) throw new ApiError(400, "All fields are required");

  const admin = await Admin.findOne({ email }).select("+password");
  if (!admin) throw new ApiError(404, "Admin not found");

  const isPasswordValid = await admin.isPasswordCorrect(password);
  if (!isPasswordValid) throw new ApiError(401, "Invalid credentials");

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(admin._id);

  const loggedInAdmin = await Admin.findById(admin._id).select("-password -refreshToken");

  const options = {
    httpOnly: true,
    secure: false,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(200, { admin: loggedInAdmin, accessToken, refreshToken }, "Admin logged in successfully")
    );
});

// 🔄 Logout Admin
const logoutAdmin = asyncHandler(async (req, res) => {
  await Admin.findByIdAndUpdate(
    req.user._id,
    { $set: { refreshToken: undefined } },
    { new: true }
  );

  const options = {
    httpOnly: true,
    secure: false,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "Admin logged out successfully"));
});

// 🔁 Refresh Access Token
const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies?.refreshToken || req.body?.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    const admin = await Admin.findById(decodedToken?._id);
    if (!admin) throw new ApiError(401, "Invalid refresh token");

    if (incomingRefreshToken !== admin?.refreshToken) {
      throw new ApiError(401, "Expired refresh token");
    }

    const options = {
      httpOnly: true,
      secure: false,
    };

    const { accessToken, refreshToken: newRefreshToken } = await generateAccessAndRefreshToken(admin._id);

    return res
      .status(201)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(new ApiResponse(200, { accessToken, refreshToken: newRefreshToken }, "Token refreshed"));
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

// 🔐 Update Email/Password
const updateAdminCredentials = asyncHandler(async (req, res) => {
  const { currentPassword, newEmail, newPassword } = req.body;

  const admin = await Admin.findById(req.user._id).select("+password");;
  if (!admin) throw new ApiError(404, "Admin not found");

  const isCorrect = await admin.isPasswordCorrect(currentPassword);
  if (!isCorrect) throw new ApiError(401, "Incorrect current password");

  if (newEmail) admin.email = newEmail;
  if (newPassword) admin.password = newPassword;

  admin.hasUpdatedCredentials = true;
  await admin.save();

  return res.status(200).json(new ApiResponse(200, {}, "Admin credentials updated successfully"));
});

// 🔍 Get Current Admin
const getCurrentAdmin = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, req.user, "Admin fetched successfully"));
});

export {
  loginAdmin,
  logoutAdmin,
  refreshAccessToken,
  updateAdminCredentials,
  getCurrentAdmin,
};
