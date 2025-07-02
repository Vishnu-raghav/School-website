import mongoose, { Schema } from "mongoose";

const infastructureImageSchema = new Schema(
  {
    title: {
      type: String,
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

export const InfastructureImage = mongoose.model("InfastructureImage", infastructureImageSchema);
