import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/cloudinary.js";
import { Topper } from "../models/topper.model.js";

// 🏆 Upload Topper
const uploadTopper = asyncHandler(async (req, res) => {
  const { name, class: className, percentage } = req.body;

  if (!req.file) {
    throw new ApiError(400, "Image file is required");
  }

  if (!name || !className || !percentage) {
    throw new ApiError(400, "Name, Class, and Percentage are required");
  }

  const result = await uploadOnCloudinary(req.file.path);
  if (!result) throw new ApiError(500, "Cloudinary upload failed");

  const topper = await Topper.create({
    name: name.trim(),
    class: className.trim(),
    percentage: parseFloat(percentage),
    imageUrl: result.secure_url,
    public_id: result.public_id,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, topper, "Topper uploaded successfully"));
});

// ❌ Delete Topper
const deleteTopper = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const topper = await Topper.findById(id);
  if (!topper) throw new ApiError(404, "Topper not found");

  await deleteFromCloudinary(topper.public_id);
  await topper.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Topper deleted successfully"));
});

// 📥 Get All Toppers
const getAllToppers = asyncHandler(async (req, res) => {
  const toppers = await Topper.find().sort({ percentage: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, toppers, "Toppers fetched successfully"));
});

export {
  uploadTopper,
  deleteTopper,
  getAllToppers,
};
