// server/routes/chatRoutes.js
import express from "express";

const router = express.Router();

// Simple demo chat (no AI)
router.post("/", async (req, res) => {
    try {
        const { message } = req.body;

        // Example: static reply
        const reply = `You said: ${message}`;

        res.json({ reply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

export default router;
