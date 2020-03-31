let mong;
oUri = "";
const mongoose = require("mongoose");
module.exports = mongoose;

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/Gardens";
}

mongoose.connect(mongoURI, { useNewUrlParser: true });
