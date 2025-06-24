// const Product = require('../models/Product');
// const Inventory = require('../models/Inventory');
// const Nutrition = require('../models/NutritionScore');

// exports.createProduct = async (req, res) => {
//   const product = await Product.create(req.body);
//   res.json(product);
// };

// exports.updateProduct = async (req, res) => {
//   const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(product);
// };

// exports.uploadNutrition = async (req, res) => {
//   const nutrition = await Nutrition.create(req.body);
//   res.json(nutrition);
// };

// exports.updateInventory = async (req, res) => {
//   const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(inventory);
// };

const Product = require('../models/Product');
const Inventory = require('../models/Inventory');
const Nutrition = require('../models/NutritionScore');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)) || user.role !== 'admin') {
    return res.status(401).json({ message: 'Not an admin' });
  }

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
};

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

exports.uploadNutrition = async (req, res) => {
  const nutrition = await Nutrition.create(req.body);
  res.json(nutrition);
};

exports.updateInventory = async (req, res) => {
  const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(inventory);
};

exports.createInventory = async (req, res) => {
  const inventory = await Inventory.create(req.body);
  res.json(inventory);
};
