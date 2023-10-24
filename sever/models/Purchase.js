const mongoose = require("mongoose");
const Userdb = require("./model");
const Items = require("./items");

var schema = new mongoose.Schema(
  {
    itemId: {
      type: String,
      default: null,
    },
    userId: {
      type: String,
      default: null,
    },
    itemName: {
      type: String,
      require:true,
      default: null,
    },
    itemImage: {
      type: String,
      require:true,
      default: null,
    },
    itemCount: {
      type: Number,
      require:true,
      default: null,
    },
    itemPrice: {
      type: Number,
      require:true,
      default: null,
    },
    qty: {
      type: Number,
      require:true,
      default: null,
    },
    itemDescription: {
      type: String,
      require:true,
      default: null,
    },
    giftMessage: {
      type: String,
      require:true,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Purchases = mongoose.model("Purchases", schema);

module.exports = Purchases;
