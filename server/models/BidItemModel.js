let mongoose = require("mongoose");

const schema = new mongoose.Schema({
  itemTitle: {
    required: true,
    type: String
  },
  itemDescription: {
    required: true,
    type: String
  },
  startBid: {
    type: Number
  },
  image: {
    type: ""
  },
  log: []
});

module.exports = mongoose.model("BidItem", schema, "items");
