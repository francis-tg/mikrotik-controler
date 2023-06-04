const {getInterfaces, rename} = require("../controllers/Interface");

const router = require("express").Router();

router.get("/:id", getInterfaces);
router.put("/rename/:id/:interface", rename);

module.exports = router;
