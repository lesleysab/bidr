let express = require("express");
const router = express.Router();
let { list, create, update } = require("../controllers/BidItemController");

router.get("/biditems", list);
router.post("/contacts", create);
router.put("/biditems", update);

module.exports = router;
