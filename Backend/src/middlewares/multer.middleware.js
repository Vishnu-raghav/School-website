import multer from "multer";
import path from "path";
import fs from "fs";


const uploadPath = "uploads";
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); 
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    cb(null, `${Date.now()}-${baseName}${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  cb(null, true); 
};

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter,
});


export const careerUpload = upload.single("resume");

export const singleUpload = (fieldName) => upload.single(fieldName);

export const multipleUpload = (fieldName, maxCount = 5) =>
  upload.array(fieldName, maxCount);
