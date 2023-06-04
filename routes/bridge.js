const {getBridge, createBridge} = require("../controllers/Bridge");

const router = require("express").Router();

router.get("/:id", getBridge);
router.put("/create/:id", createBridge);

module.exports = router;
