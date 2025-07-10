import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import nodemailer from "nodemailer";

export const handleFormSubmission = asyncHandler(async (req, res) => {
  const { formType } = req.body;
  if (!formType) throw new ApiError(400, "Form type is required");

  let subject = "", html = "", attachments = [];

  if (formType === "contact") {
    subject = "📩 New Contact Message";
    html = `
      <h3>Contact Submission</h3>
      <p><strong>Name:</strong> ${req.body.from_name}</p>
      <p><strong>Email:</strong> ${req.body.user_email}</p>
      <p><strong>Message:</strong> ${req.body.message}</p>
    `;
  } else if (formType === "admission") {
    subject = "🎓 New Admission Request";
    html = `
      <h3>Admission Form</h3>
      <p><strong>Student Name:</strong> ${req.body.student_name}</p>
      <p><strong>Class:</strong> ${req.body.class}</p>
      <p><strong>DOB:</strong> ${req.body.dob}</p>
      <p><strong>Parent Name:</strong> ${req.body.parent_name}</p>
      <p><strong>Phone:</strong> ${req.body.phone}</p>
      <p><strong>Message:</strong> ${req.body.message}</p>
    `;
  } else if (formType === "career") {
    subject = "🧑‍🏫 New Job Application";
    html = `
      <h3>Career Application</h3>
      <p><strong>Name:</strong> ${req.body.full_name}</p>
      <p><strong>Email:</strong> ${req.body.email}</p>
      <p><strong>Phone:</strong> ${req.body.phone}</p>
      <p><strong>DOB:</strong> ${req.body.dob}</p>
      <p><strong>City:</strong> ${req.body.city}</p>
      <p><strong>Qualification:</strong> ${req.body.qualification}</p>
      <p><strong>Post:</strong> ${req.body.post}</p>
      <p><strong>Experience:</strong> ${req.body.experience}</p>
      <p><strong>Designation:</strong> ${req.body.designation || "N/A"}</p>
      <p><strong>Salary:</strong> ${req.body.salary || "N/A"}</p>
      <p><strong>Notice Period:</strong> ${req.body.notice}</p>
    `;

    if (req.file) {
      attachments.push({
        filename: req.file.originalname,
        path: req.file.path,
      });
    }
  } else {
    throw new ApiError(400, "Invalid form type");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${req.body.from_name || "KPS Website"}" <${req.body.user_email || process.env.MAIL_USER}>`,
    to: process.env.MAIL_RECEIVER,
    subject,
    html,
    attachments,
  });

  return res.status(200).json(new ApiResponse(200, {}, "Form submitted successfully"));
});
