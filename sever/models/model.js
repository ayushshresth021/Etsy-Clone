const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  username: {
    type: String,
    require:true,
    default: null,
  },
  email: {
    type: String,
    require:true,
    default: null,
  },
  password: {
    type: String,
    require:true,
    default: null,
  },
  fullAddress: {
    type: String,
    require:true,
    default: null,
  },
  city: {
    type: String,
    require:true,
    default: null,
  },
  phoneNumber: {
    type: String,
    require:true,
  },
  dob: {
    type: String,
    require:true,
    default: null,
  },
  gender: {
    type: String,
    require:true,
    default: null,
  },
  profilePic: {
    type: String,
    require:true,
    default: null,
  },
  about: {
    type: String,
    default: null,
  },
  shopName: {
    type: String,
    default: "",
  },
  shopImage: {
    type: String,
    default: null,
  },
});

const Userdb = mongoose.model("Userdb", schema);

module.exports = Userdb;
