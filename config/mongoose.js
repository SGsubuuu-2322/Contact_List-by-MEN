// This is importing ODM mongoose for database operations...
const mongoose = require("mongoose");

// This is to connect our app to  the MongoDB server.
mongoose.connect("mongodb://127.0.0.1:27017/contacts_list_db");

// This is acquiring the connections...
const db = mongoose.connection;


// This is handling the events which can happen while DB connections...
db.on("error", console.error.bind(console, "Error in connecting to the db"));
db.once("open", () => {
  console.log("You'hv successfully connected to the db...");
});
