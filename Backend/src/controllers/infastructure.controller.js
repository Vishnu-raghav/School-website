import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse  } from "../utils/ApiResponse.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/cloudinary.js";
import { InfastructureImage } from "../models/infastructureImage.model.js";

// 🏗️ Upload Infrastructure Image
const uploadInfastructureImage = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!req.file || !title) {
    throw new ApiError(400, "Image and title are required");
  }

  const result = await uploadOnCloudinary(req.file.path);
  if (!result) throw new ApiError(500, "Cloudinary upload failed");

  const image = await InfastructureImage.create({
    title,
    imageUrl: result.secure_url,
    public_id: result.public_id,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, image, "Infrastructure image uploaded successfully"));
});

// ❌ Delete Infrastructure Image
const deleteInfastructureImage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const image = await InfastructureImage.findById(id);
  if (!image) throw new ApiError(404, "Infrastructure image not found");

  await deleteFromCloudinary(image.public_id);
  await image.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Infrastructure image deleted successfully"));
});

// 📤 Get All Infrastructure Images
const getAllInfastructureImages = asyncHandler(async (req, res) => {
  const images = await InfastructureImage.find().sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, images, "Infrastructure images fetched successfully"));
});

export {
  uploadInfastructureImage,
  deleteInfastructureImage,
  getAllInfastructureImages,
};
