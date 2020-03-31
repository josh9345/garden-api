const Vegetables = require("../models/GardenInfo");

module.exports = {
  index: (req, res) => {
    Vegetables.find({}).then(veggie => {
      res.json(veggie);
    });
  }
};
