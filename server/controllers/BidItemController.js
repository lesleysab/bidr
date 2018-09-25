const BidItemModel = require("../models/BidItemModel");

module.exports.list = function list(req, res) {
  return BidItemModel.find()
    .then(items => res.json(items))
    .catch(err => res.json("api failure"));
};

module.exports.update = function update(req, res) {
  return BidItemModel.findOneAndUpdate(
    { _id: req.body.cardId },
    { $set: { log: req.body.log } }
  ).then(results => {
    return res.json(results);
  });
};
