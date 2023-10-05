// product.js

const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

exports.createProduct = (req, res) => {
  products.push(req.body);
  console.log(req.body);
  res.json({ type: "POST" });
};

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};

exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex !== -1) {
    products[productIndex] = { ...req.body, id: id };
    res.json({ message: "Product updated successfully" });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};

exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...req.body };
    res.json({ message: "Product updated successfully" });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.json({ message: "Product deleted successfully" });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};
