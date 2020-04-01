const Vegetables = require("../models/GardenInfo");

module.exports = {
  index: (req, res) => {
    Vegetables.find({}).then(veggie => {
      res.json(veggie);
    });
  },
  searchVegetable: (req, res) => {
    Vegetables.find({ name: req.params.name }).then(veggie => {
      res.json(veggie);
    });
  }
};
