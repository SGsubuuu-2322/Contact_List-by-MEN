const express = require("express");
const path = require("path");
const port = 8000;

const db = require("./config/mongoose");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assets"));

let contactList = [
  {
    name: "Subham",
    number: 123456,
  },
  {
    name: "Papa",
    number: 654321,
  },
  {
    name: "Mee",
    number: 67890,
  },
  {
    name: "Mama",
    number: 9876,
  },
  {
    name: "gelhi",
    number: 34567,
  },
];

app.get("/", (req, res) => {
  return res.render("home", {
    title: "My Contacts List",
    contacts_list: contactList,
  });
});

app.post("/create-contact", (req, res) => {
  // contactList.push({
  //   name: req.body.name,
  //   number: req.body.number,
  // });
  contactList.push(req.body);
  return res.redirect("back");
});

app.get("/delete-contact/", (req, res) => {
  const number = req.query.phoneNumber;

  const contactIndex = contactList.findIndex(
    (contact) => contact.number === +number
  );

  if (contactIndex !== -1) {
    contactList.splice(contactIndex, 1);
  }
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
