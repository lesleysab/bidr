let mongoose = require("mongoose");

const schema = new mongoose.Schema({
  itemTitle: {
    type: String,
    required: true
  },
  itemDescription: {
    type: String,
    required: true
  },
  startBid: {
    type: Number,
    required: true
  },
  imageURL: {
    data: Buffer,
    type: String,
    required: true
  },
  log: []
});

module.exports = mongoose.model("BidItem", schema, "items");
