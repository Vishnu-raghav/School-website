import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/cloudinary.js";
import { PopUpImage } from "../models/popup.model.js";

// ✅ Upload Pop-up Image
const uploadPopupImage = asyncHandler(async (req, res) => {
  if (!req.file) throw new ApiError(400, "Image file is required");

  const result = await uploadOnCloudinary(req.file.path);
  if (!result) throw new ApiError(500, "Cloudinary upload failed");

  const popup = await PopUpImage.create({
    imageUrl: result.secure_url,
    public_id: result.public_id,
    isActive: true,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, popup, "Popup image uploaded successfully"));
});

// ❌ Delete Pop-up Image
const deletePopupImage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const popup = await PopUpImage.findById(id);
  if (!popup) throw new ApiError(404, "Popup image not found");

  await deleteFromCloudinary(popup.public_id);
  await popup.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Popup image deleted successfully"));
});

// 🔁 Toggle Popup Visibility
const togglePopupStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const popup = await PopUpImage.findById(id);
  if (!popup) throw new ApiError(404, "Popup image not found");

  popup.isActive = !popup.isActive;
  await popup.save();

  return res
    .status(200)
    .json(new ApiResponse(200, popup, `Popup status updated to ${popup.isActive}`));
});

// 📤 Get All Pop-up Images
const getAllPopupImages = asyncHandler(async (req, res) => {
  const popups = await PopUpImage.find().sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, popups, "Popup images fetched successfully"));
});

export {
  uploadPopupImage,
  deletePopupImage,
  togglePopupStatus,
  getAllPopupImages,
};
