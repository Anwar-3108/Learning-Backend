const express = require("express");
const router= express.Router();
const ProductController = require("../controller/product");


router
  .get("/products", ProductController.getAllProducts)
  .get("/products/:id", ProductController.getProduct)
  .post("/products", ProductController.createProduct)
  .patch("/products/:id", ProductController.updateProduct)
  .put("/products/:id", ProductController.replaceProduct)
  .delete("/products/:id", ProductController.deleteProduct);




  exports.router=router