import express from "express";
import OpenAI from "openai";

const router = express.Router();

// Initialize OpenAI client with key from environment
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await openai.responses.create({
      model: "gpt-5-nano",
      input: message,
    });

    res.json({
      reply: response.output[0].content[0].text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
