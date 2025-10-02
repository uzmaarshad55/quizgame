const express = require("express");
const router = express.Router();
const Score = require("../models/Score");  // ✅ صحیح import

// POST new score
router.post("/", async (req, res) => {
  const { name, score } = req.body;
  try {
    const newScore = new Score({ name, score });
    await newScore.save();
    res.status(201).json(newScore);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all scores (Leaderboard - sorted by highest score)
router.get("/", async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 });
    res.json(scores);   // ✅ یہ ٹھیک کر دیا
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;   // ✅ یہاں export لازمی
