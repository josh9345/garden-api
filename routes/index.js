const express = require("express");
const router = express.Router();

router.use("/vegetables", require("./vegetables"));

module.exports = router;
