const mongoose = require("mongoose");
const Userdb = require("./model");
const Items = require("./items");

var favschema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require:true,
    ref: Userdb,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    require:true,
    ref: Items,
  },
});

const Favourites = mongoose.model("Favourites", favschema);

module.exports = Favourites;
