// const mongoose = require('mongoose');
// const inventorySchema = new mongoose.Schema({
//   productId: mongoose.Schema.Types.ObjectId,
//   inStock: Boolean,
//   storeLocation: String,
//   deliveryETA: Number
// });
// module.exports = mongoose.model('Inventory', inventorySchema);


const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, default: 0 },
  status: { type: String, default: 'in stock' },
  inStock: Boolean,
  storeLocation: String,
  deliveryETA: Number
});

module.exports = mongoose.model('Inventory', inventorySchema);
