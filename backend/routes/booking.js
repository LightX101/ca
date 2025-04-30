const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  const {
    carType,
    pickUp,
    dropOff,
    pickTime,
    dropTime,
    name,
    lastName,
    phone,
    age,
    email,
    address,
    city,
    zipcode
  } = req.body;

  try {
    const [result] = await db.execute(
      `INSERT INTO bookings 
        (car_type, pick_up, drop_off, pick_time, drop_time, name, last_name, phone, age, email, address, city, zipcode)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [carType, pickUp, dropOff, pickTime, dropTime, name, lastName, phone, age, email, address, city, zipcode]
    );

    res.status(201).json({ success: true, message: "Booking successful" });
  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({ success: false, message: "Server error while booking" });
  }
});

module.exports = router;
