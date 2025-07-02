import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/cloudinary.js";
import { GalleryImage } from "../models/galleryImages.model.js";

// 🖼️ Upload Gallery Image
const uploadGalleryImage = asyncHandler(async (req, res) => {
  const { section } = req.body;
  if (!req.file || !section?.trim()) {
    throw new ApiError(400, "Image and section are required");
  }

  const result = await uploadOnCloudinary(req.file.path);
  if (!result) throw new ApiError(500, "Cloudinary upload failed");

  const image = await GalleryImage.create({
    section: section.trim(),
    imageUrl: result.secure_url,
    public_Id: result.public_id,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, image, "Gallery image uploaded successfully"));
});

// ❌ Delete Gallery Image
const deleteGalleryImage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const image = await GalleryImage.findById(id);
  if (!image) throw new ApiError(404, "Gallery image not found");

  await deleteFromCloudinary(image.public_Id);
  await image.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Gallery image deleted successfully"));
});

// 📤 Get All Gallery Images
const getAllGalleryImages = asyncHandler(async (req, res) => {
  const images = await GalleryImage.find().sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, images, "All gallery images fetched"));
});

// 📤 Get Gallery Images by Section
const getGalleryImagesBySection = asyncHandler(async (req, res) => {
  const { section } = req.query;

  if (!section) {
    throw new ApiError(400, "Section is required");
  }

  const images = await GalleryImage.find({ section }).sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, images, `${section} images fetched successfully`));
});

export {
  uploadGalleryImage,
  deleteGalleryImage,
  getAllGalleryImages,
  getGalleryImagesBySection,
};
