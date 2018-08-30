const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const BidItemRoutes = require("./routes/BidItemRoutes");

mongoose.connect(
  "mongodb://lesleysab:Murphydog1@ds123822.mlab.com:23822/final-project"
);

const app = express();

app.use(bodyParser.json());
app.use(BidItemRoutes);

app.listen(3001, () => {
  console.log("listening on: 3001");
});
