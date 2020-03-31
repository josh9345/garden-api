const express = require("express");
const router = express.Router();
const Vegetables = require("../controllers/vegetables");

router.get("/", Vegetables.index);

module.exports = router;
