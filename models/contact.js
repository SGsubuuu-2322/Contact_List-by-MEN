// This is importing mongoose js as our ODM for model creation...
const mongoose = require("mongoose");

// This is creating schema for contacts collection , which will be used to create the Contact Model
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

// This is creating the model with  the above defined schema and exporting it so that
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
