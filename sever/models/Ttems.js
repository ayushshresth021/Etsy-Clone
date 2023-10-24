const mongoose = require("mongoose");
const Userdb = require("./model");

var schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Userdb,
  },
  itemName: {
    type: String,
    require:true,
    default: null,
  },
  itemCategory: {
    type: String,
    require:true,
    default: null,
  },
  itemPrice: {
    type: Number,
     require:true,
    default: null,
  },
  itemDescription: {
    type: String,
    require:true,
    default: null,
  },
  itemCount: {
    type: Number,
    require:true,
    default: null,
  },
  itemImage: {
    type: String,
    require:true,
    default: null,
  },
  sales: {
    type: Number,
    require:true,
    default: 0,
  },
});

const Items = mongoose.model("Items", schema);

module.exports = Items;
