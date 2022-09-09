const mongoose = require("mongoose");
require("dotenv").config();
const url='mongodb://127.0.0.1:27017'

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("db is connected");
  } catch (error) {
    console.log("db failed");
  }
};
module.exports = connectDb;
