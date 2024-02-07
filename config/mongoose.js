const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/contacts_list_db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to the db"));
db.once("open", () => {
  console.log("You'hv successfully connected to the db...");
});
