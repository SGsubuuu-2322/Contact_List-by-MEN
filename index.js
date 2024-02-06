const express = require("express");
const path = require("path");
const port = 8000;

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

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
