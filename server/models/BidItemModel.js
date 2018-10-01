let mongoose = require("mongoose");

const schema = new mongoose.Schema({
  itemTitle: {
    type: String
  },
  itemDescription: {
    type: String
  },
  startBid: {
    type: Number
  },
  imageURL: {
    data: Buffer,
    type: String
  },
  log: []
});

module.exports = mongoose.model("BidItem", schema, "items");
