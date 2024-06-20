const express = require("express");
const router = express.Router();
const UIComponent = require("../models/UIComponent");

// Get all components
router.get("/", async (req, res) => {
  try {
    const components = await UIComponent.find();
    res.json(components);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new component
router.post("/", async (req, res) => {
  const { name, html, css, js } = req.body;

  const newComponent = new UIComponent({ name, html, css, js });

  try {
    const savedComponent = await newComponent.save();
    res.status(201).json(savedComponent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
