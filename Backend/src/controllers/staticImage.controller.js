// controllers/staticImage.controller.js
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/cloudinary.js";
import { StaticImage } from "../models/staticImage.model.js";

// Upload Static Image
const uploadStaticImage = asyncHandler(async (req, res) => {
  const { section } = req.body;
  if (!section?.trim()) throw new ApiError(400, "Section is required");
  if (!req.file) throw new ApiError(400, "Image file is required");

  const result = await uploadOnCloudinary(req.file.path);
  if (!result) throw new ApiError(500, "Cloudinary upload failed");

  const newImage = await StaticImage.create({
    section: section.trim(),
    imageUrl: result.secure_url,
    publicId: result.public_id,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, newImage, "Static image uploaded successfully"));
});

// Delete Static Image
const deleteStaticImage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const image = await StaticImage.findById(id);
  if (!image) throw new ApiError(404, "Image not found");

  await deleteFromCloudinary(image.publicId);
  await image.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Static image deleted successfully"));
});

// Get All Static Images
const getAllStaticImages = asyncHandler(async (req, res) => {
  const images = await StaticImage.find().sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, images, "All static images fetched successfully"));
});

// Get Static Images by Section
const getStaticImagesBySection = asyncHandler(async (req, res) => {
  const { section } = req.query;
  if (!section) throw new ApiError(400, "Section is required");

 const images = await StaticImage.find({ section }).sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, images, `${section} images fetched successfully`));
});

export {
  uploadStaticImage,
  deleteStaticImage,
  getAllStaticImages,
  getStaticImagesBySection,
};
