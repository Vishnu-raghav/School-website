import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import adminRoutes from "./routes/admin.routes.js";
import popupRoutes from "./routes/popup.routes.js";
import galleryRoutes from "./routes/gallery.routes.js";

import mailRoutes from "./routes/mail.routes.js";
import formRoutes from "./routes/form.routes.js"; 

const app = express();

const allowedOrigin = process.env.CORS_ORIGIN || "https://krishnapublicschool.net";

app.use(cors({
  origin: allowedOrigin,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options("*", cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/popup", popupRoutes);
app.use("/api/v1/gallery", galleryRoutes);
app.use("/api/v1/form", formRoutes);
app.use("/api/v1/mail", mailRoutes);

export { app };
