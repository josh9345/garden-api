const express = require("express");
const router = express.Router();
const Vegetables = require("../controllers/vegetables");

router.get("/", Vegetables.index);
router.get("/name/:name", Vegetables.searchVegetable);

module.exports = router;
