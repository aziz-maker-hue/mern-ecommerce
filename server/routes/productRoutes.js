// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create Product
router.post('/', async (req, res) => {
  const { name, description, price, image, category } = req.body;
  try {
    const product = new Product({ name, description, price, image, category });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
