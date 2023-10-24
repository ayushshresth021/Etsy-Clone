const mongoose = require("mongoose");

const connectDB = async () => {
  try {
   //connect with database
    const con = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Mongo db connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
