const express = require("express");
const path = require("path");
const port = 8000;

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  return res.render("home", { title: "My Contacts List" });
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
