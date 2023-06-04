const router = require("express").Router();
const {addRouter, getRouter} = require("../controllers/addRouter");
router.post("/add", addRouter);
router.get("/all", getRouter);
module.exports = router;
