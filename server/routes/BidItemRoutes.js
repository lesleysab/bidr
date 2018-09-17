let express = require("express");
const router = express.Router();
let { list, update } = require("../controllers/BidItemController");

router.get("/", (req, res, next) => {
  return res.json("welcome2");
});

router.get("/biditems", list);

router.put("/biditems", update);

module.exports = router;
