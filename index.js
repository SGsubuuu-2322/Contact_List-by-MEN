const express = require("express");
const port = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Yup!!! buddy it is running</h1>");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error: ", err);
    return;
  }

  console.log("Your express server is up and running at port: ", port);
});
