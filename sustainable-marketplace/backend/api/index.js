const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Sample Product Data
const products = [
  { id: 1, name: "scrunchie", price: 20, category: "fancy", image: "https://raw.githubusercontent.com/saniyasunilkumar/image/refs/heads/main/scrunchy.jpg" },
  { id: 2, name: "Footwear", price: 40, category: "footwear", image: "https://raw.githubusercontent.com/saniyasunilkumar/image/refs/heads/main/shoe.jpg" },
  { id: 3, name: "skincare", price: 300, category: "skincare", image: "https://raw.githubusercontent.com/saniyasunilkumar/image/refs/heads/main/skincare.jpg" },
  { id: 4, name: "tshirt", price: 150, category: "clothing", image: "https://raw.githubusercontent.com/saniyasunilkumar/image/refs/heads/main/tshirt.jpg" },
  { id: 5, name: "Totebag", price: 800, category: "Accessories", image: "https://raw.githubusercontent.com/saniyasunilkumar/image/refs/heads/main/bag.jpg" },
  { id: 6, name: "Her Care", price: 500, category: "Her care", image: "https://raw.githubusercontent.com/saniyasunilkumar/image/refs/heads/main/pad.jpg" },
];

// Endpoint to Get All Products
app.get("/products", (req, res) => {
  res.json(products);
});

// Endpoint to Get Unique Categories
app.get("/categories", (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json(categories);
});

// Endpoint to Get Products by Category
app.get("/products/:category", (req, res) => {
  const category = req.params.category;
  const filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  res.json(filteredProducts);
});

// Export the app for Vercel
module.exports = app;
