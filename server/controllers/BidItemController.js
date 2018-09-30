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

module.exports.create = function create(req, res) {
  const newBidItem = new BidItemModel({
    itemTitle: req.body.itemTitle,
    itemDescription: req.body.itemDescription,
    startBid: req.body.startBid,
    image: req.body.image
  });
  newBidItem.save().then(savedBidItem => {
    return res.json(savedBidItem);
  });
};
