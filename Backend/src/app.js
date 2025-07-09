
// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";


// import adminRoutes from "./routes/admin.routes.js";
// import contactRoutes from "./routes/contact.routes.js";
// import popupRoutes from "./routes/popup.routes.js";
// import galleryRoutes from "./routes/gallery.routes.js";
// import staticImageRoutes from "./routes/staticImage.routes.js";
// import topperRoutes from "./routes/topper.routes.js";
// import infrastructureRoutes from "./routes/infastructure.routes.js";
// import mailRoutes from "./routes/mail.routes.js";
// import formRoutes from "./routes/form.routes.js"; 

// const app = express();

// //  middlewares
// app.use(cors({
//   origin: process.env.CORS_ORIGIN,
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));
// app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static("public"));
// app.use(cookieParser());

// //  Route Declarations
// app.use("/api/v1/admin", adminRoutes);
// app.use("/api/v1/contact", contactRoutes);
// app.use("/api/v1/popup", popupRoutes);
// app.use("/api/v1/gallery", galleryRoutes);
// app.use("/api/v1/static", staticImageRoutes);
// app.use("/api/v1/topper", topperRoutes);
// app.use("/api/v1/infrastructure", infrastructureRoutes);
// app.use("/api/v1/form", formRoutes); 
// app.use("/api/v1/mail", mailRoutes); 

// export { app };


// app.js
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// ✅ routes import
import adminRoutes from "./routes/admin.routes.js";
import popupRoutes from "./routes/popup.routes.js";
import galleryRoutes from "./routes/gallery.routes.js";

import mailRoutes from "./routes/mail.routes.js";
import formRoutes from "./routes/form.routes.js"; 

const app = express();

// ✅ CORS configuration
const allowedOrigin = process.env.CORS_ORIGIN || "https://krishnapublicschool.net";

app.use(cors({
  origin: allowedOrigin,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// ✅ Preflight requests handler (very important)
app.options("*", cors());

// ✅ Middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// ✅ Route Declarations
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/popup", popupRoutes);
app.use("/api/v1/gallery", galleryRoutes);
app.use("/api/v1/form", formRoutes);
app.use("/api/v1/mail", mailRoutes);

export { app };
