// let mongoose = require("mongoose");
// let contacts = require("../items");
const BidItemModel = require("../models/BidItemModel");

module.exports.list = function list(req, res) {
  return BidItemModel.find()
    .then(items => res.json(items))
    .catch(err => res.json("api failure"));
};
