
const express = require("express");
const router = express.Router();

const { fetchProducts, fetchOneProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/products");

// CRUD
// All routes below are starting with "/api"

router.post("/", createProduct);     // Create
router.get("/", fetchProducts);      // Read
router.get("/:id", fetchOneProduct); // Read
router.patch("/:id", updateProduct); // Update
router.delete("/:id", deleteProduct);  // Delete

module.exports = router;

