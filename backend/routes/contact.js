const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  const { fullName, email, message } = req.body;

  try {
    const [result] = await db.execute(
      "INSERT INTO contacts (full_name, email, message) VALUES (?, ?, ?)",
      [fullName, email, message]
    );

    res.status(201).json({ success: true, message: "Message stored successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
