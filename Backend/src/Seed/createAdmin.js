import dotenv from "dotenv";
import bcrypt from "bcrypt";
import connectDB from "../db/index.js";
import { Admin } from "../models/Admin.model.js";

dotenv.config({ path: "./.env" });

const createDefaultAdmin = async () => {
  try {
    await connectDB();

    const exists = await Admin.findOne({ hasUpdatedCredentials: false });
    if (exists) {
      console.log("ℹ️ Admin already exists and not updated");
      return process.exit(0);
    }

    const hashed = await bcrypt.hash("admin123", 10);

    await Admin.create({
      email: "vishnur1225@gmail.com",
      password: hashed,
      hasUpdatedCredentials: false,
    });

    console.log("✅ Default admin created");
    process.exit(0);
  } catch (err) {
    console.log("❌ Error creating admin:", err.message);
    process.exit(1);
  }
};

createDefaultAdmin();
