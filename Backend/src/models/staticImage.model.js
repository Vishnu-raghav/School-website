// models/staticImage.model.js
import mongoose, { Schema } from "mongoose";

const staticImageSchema = new Schema(
  {
    section: {
      type: String,
      enum: ["HeroSection", "WhyUs", "AboutUs", "FooterImage", "PrincipleImage", "DirectorImage"],
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const StaticImage = mongoose.model("StaticImage", staticImageSchema);
