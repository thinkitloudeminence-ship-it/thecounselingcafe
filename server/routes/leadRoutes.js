// server/routes/leadRoutes.js
import express from "express";
import Lead from "../models/Lead.js";

const router = express.Router();

// POST /api/leads  <-- save a lead
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, role } = req.body;

    // basic validation
    if (!name || !email || !phone || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // simple email + phone basic checks (optional, not too strict)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }
    const phoneClean = phone.replace(/\D/g, "");
    if (phoneClean.length < 7) {
      return res.status(400).json({ error: "Invalid phone number" });
    }

    const lead = new Lead({ name, email, phone, role });
    await lead.save();

    return res.status(201).json({ message: "Lead saved", lead });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
