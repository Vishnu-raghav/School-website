import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ContactDetail } from "../models/contactDetails.model.js";

// ✏️ Create or Update Contact Detail (Only one allowed)
const upsertContactDetail = asyncHandler(async (req, res) => {
  const {
    phone,
    email,
    address = "",
    facebook = "",
    instagram = "",
    youtube = "",
  } = req.body;

  if (!phone || !email) {
    throw new ApiError(400, "Phone and Email are required");
  }

  const existing = await ContactDetail.findOne();

  const data = {
    phone,
    email,
    address,
    facebook,
    instagram,
    youtube,
  };

  let contact;

  if (existing) {
    // update existing contact
    contact = await ContactDetail.findByIdAndUpdate(
      existing._id,
      { $set: data },
      { new: true }
    );
    return res
      .status(200)
      .json(new ApiResponse(200, contact, "Contact details updated successfully"));
  }

  // create new contact
  contact = await ContactDetail.create(data);
  return res
    .status(201)
    .json(new ApiResponse(201, contact, "Contact details created successfully"));
});

// 📤 Get Contact Detail
const getContactDetail = asyncHandler(async (req, res) => {
  const contact = await ContactDetail.findOne();

  if (!contact) {
    throw new ApiError(404, "No contact details found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, contact, "Contact details fetched successfully"));
});

export { upsertContactDetail, getContactDetail };
