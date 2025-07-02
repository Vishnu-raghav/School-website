// import multer from "multer";
// import fs from "fs";
// import path from "path";

// // ✅ Ensure temp folder exists
// const tempPath = path.resolve("public", "temp");
// if (!fs.existsSync(tempPath)) {
//   fs.mkdirSync(tempPath, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, tempPath);
//   },
//   filename: function (req, file, cb) {
//     const uniqueName = `${Date.now()}-${file.originalname}`;
//     cb(null, uniqueName);
//   },
// });

// export const upload = multer({ storage });
// backend/config/multerConfig.js


// import multer from "multer";
// import fs from "fs";
// import path from "path";

// // ✅ Ensure temp folder exists
// const tempPath = path.resolve("public", "temp");
// if (!fs.existsSync(tempPath)) {
//   fs.mkdirSync(tempPath, { recursive: true });
// }

// // ✅ Storage config
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, tempPath);
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = `${Date.now()}-${file.originalname}`;
//     cb(null, uniqueName);
//   },
// });

// // ✅ Base multer instance
// const upload = multer({ storage });

// /**
//  * ✅ Single File Upload Middleware
//  * Usage: singleUpload("profileImage")
//  */
// export const singleUpload = (fieldName) => upload.single(fieldName);

// /**
//  * ✅ Multiple Fields Upload for Career Form
//  * Usage: router.post("/form/submit", careerUpload, handler)
//  */
// export const careerUpload = upload.fields([
//   { name: "resume", maxCount: 1 },
//   { name: "passport_size_photo", maxCount: 1 },
// ]);

// // ✅ Default upload export
// export default upload;





import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure the upload directory exists
const uploadPath = "uploads";
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); // Folder where files will be stored
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    cb(null, `${Date.now()}-${baseName}${ext}`);
  },
});

// Optional file type filter (you can customize it)
const fileFilter = (req, file, cb) => {
  cb(null, true); // Allow all files, customize if needed
};

// Multer instance
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit: 5MB per file
  fileFilter,
});

// ✅ For career form - multiple fields
export const careerUpload = upload.single("resume");

// ✅ For single image upload (like gallery)
export const singleUpload = (fieldName) => upload.single(fieldName);

// ✅ For multiple files (same field name)
export const multipleUpload = (fieldName, maxCount = 5) =>
  upload.array(fieldName, maxCount);
