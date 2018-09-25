let express = require("express");
const router = express.Router();
let { list, update } = require("../controllers/BidItemController");

router.get("/biditems", list);

router.put("/biditems", update);

module.exports = router;
