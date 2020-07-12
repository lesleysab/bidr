const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const BidItemRoutes = require("./routes/BidItemRoutes");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://lesleysab:@ds123822.mlab.com:23822/final-project"
);

const app = express();
app.use(bodyParser.json());
app.use(BidItemRoutes);
app.use(express.static(path.join(__dirname + "../../build")));
app.use(
  "/lesleysab/bidr",
  express.static(path.join(__dirname + "../../build"))
);

app.listen(process.env.PORT || 3001, () => {
  console.log("listening on: 3001");
});
