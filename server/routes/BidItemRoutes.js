let express = require("express");
const router = express.Router();
let { list } = require("../controllers/BidItemController");

router.get("/", (req, res, next) => {
  return res.json("welcome2");
});

router.get("/biditems", list);

module.exports = router;
