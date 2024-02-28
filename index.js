// Importing express js in our project to be used as backend framework...
const express = require("express");
// Importing path for handling the file paths and setting port for our server to listen the clients request...
const path = require("path");
const port = 8000;

// Importing mongoDB configurations  and connection with the database and contacts model.
const db = require("./config/mongoose");
const contact = require("./models/contact");

// Creating an instance of express as app
const app = express();

// This is setting app views as ejs as their view-engine...
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// This  middleware function will help us handle data parsing from request body..
app.use(express.urlencoded());
// This is  a middleware function that will help us serve static as html, css and js...
app.use(express.static("assets"));

// let contactList = [
//   {
//     name: "Subham",
//     number: 123456,
//   },
//   {
//     name: "Papa",
//     number: 654321,
//   },
//   {
//     name: "Mee",
//     number: 67890,
//   },
//   {
//     name: "Mama",
//     number: 9876,
//   },
//   {
//     name: "gelhi",
//     number: 34567,
//   },
// ];

// This is controller for handling the home route with  HTTP GET method and some logic action and giving views as response...
app.get("/", (req, res) => {
  contact
    .find({})
    .then((contacts) => {
      return res.render("home", {
        title: "My Contacts List",
        contacts_list: contacts,
      });
    })
    .catch((err) => {
      console.log("There's some issue in fetching your contacts...");
      return;
    });
});


// This is post request controller for creating contact and putting the contact details into the DB...
app.post("/create-contact", (req, res) => {
  // contactList.push({
  //   name: req.body.name,
  //   number: req.body.number,
  // });
  contact
    .create({
      name: req.body.name,
      number: req.body.number,
    })
    .then((newContact) => {
      // console.log("==========", newContact);
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("There's some technical issue in populating the DB...", err);
      return;
    });
  // contactList.push(req.body);
  // return res.redirect("back");
});



// This is get method controller for deleting a contact passed with specific contact id as query params
app.get("/delete-contact/", (req, res) => {
  const id = req.query.id;

  const contactIndex = contact.findByIdAndDelete(id).catch((err) => {
    console.log("There's some issue in deleting the contact");
    return;
  });
  return res.redirect("back");
});

// This is a get method controller for fun purpose...
app.get("/practice", (req, res) => {
  return res.render("practice", {
    title: "Playing with ejs",
  });
});


// This is our server listening on specific port....
app.listen(port, (err) => {
  if (err) {
    console.log("Error: ", err);
    return;
  }

  console.log("Your express server is up and running at port: ", port);
});
