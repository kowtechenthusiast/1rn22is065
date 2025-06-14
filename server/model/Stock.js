const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    symbol: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;
