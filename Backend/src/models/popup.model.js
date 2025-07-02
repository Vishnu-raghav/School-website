import mongoose from "mongoose"
import {Schema} from "mongoose"

const popupImageSchema = new Schema(
    {
    imageUrl: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true, // true = show popup, false = don't show
    },
  },
  { timestamps: true }
)


export const PopUpImage = mongoose.model("PopUpImage",popupImageSchema)