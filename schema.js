// Create schema in any Database script or any ORM (Object Relational Mapping)
const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  created_at: Date,
  modified_at: Date,
  deleted_at: Date,
});
const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);
const productInventorySchema = new mongoose.Schema({
  id: Number,
  quantity: Number,
  created_at: Date,
  modified_at: Date,
  deleted_at: Date,
});
const ProductInventory = mongoose.model(
  "ProductInventory",
  productInventorySchema
);

const discountSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  discount_percentage: Number,
  active: Boolean,
  created_at: Date,
  modified_at: Date,
  deleted_at: Date,
});
const Discount = mongoose.model("Discount", discountSchema);

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  SKU: String,
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategory",
  },
  inventory_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductInventory",
  },
  price: Number,
  discount_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Discount",
  },
  created_at: Date,
  modified_at: Date,
  deleted_at: Date,
});
const Products = mongoose.model("ProductCategory", productSchema);
module.exports = { Products, ProductCategory, ProductInventory, Discount };
