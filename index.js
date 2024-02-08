const express = require("express");
const path = require("path");
const port = 8000;

const db = require("./config/mongoose");
const contact = require("./models/contact");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
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

app.get("/delete-contact/", (req, res) => {
  const id = req.query.id;

  const contactIndex = contact.findByIdAndDelete(id).catch((err) => {
    console.log("There's some issue in deleting the contact");
    return;
  });
  return res.redirect("back");
});

app.get("/practice", (req, res) => {
  return res.render("practice", {
    title: "Playing with ejs",
  });
});
app.listen(port, (err) => {
  if (err) {
    console.log("Error: ", err);
    return;
  }

  console.log("Your express server is up and running at port: ", port);
});
