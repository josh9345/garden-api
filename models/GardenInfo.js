const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const vegetables = new Schema({
  name: String,
  alternateName: String,
  sowInstructions: String,
  spaceInstructions: String,
  harvestInstructions: String,
  compatiblePlants: String,
  avoidInstructions: String,
  culinaryHints: String,
  culinaryPreservation: String,
  url: String,
  images: String
});
module.exports = mongoose.model("GardenInfo", vegetables);
