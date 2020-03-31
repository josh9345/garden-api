const data = require("./plant.json");
const veggies = require("../models/GardenInfo");

const veggieData = data.map(item => {
  const plants = {
    name: item.Name,
    alternateName: item.alternateName,
    sowInstructions: item.sowInstructions,
    spaceInstructions: item.spaceInstructions,
    harvestInstructions: item.harvestInstructions,
    compatiblePlants: item.compatiblePlants,
    avoidInstructions: item.avoidInstructions,
    culinaryHints: item.culinaryHints,
    culinaryPreservation: item.culinaryPreservation,
    url: item.url,
    images: item.images
  };
  return plants;
});
veggies.remove({}).then(() => {
  veggies.create(veggieData).then(veg => {
    console.log(veg);
  });
});
