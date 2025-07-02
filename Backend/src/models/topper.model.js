import mongoose, { Schema } from "mongoose";

const topperSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Topper = mongoose.model("Topper", topperSchema);
