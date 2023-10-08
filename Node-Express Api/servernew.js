const express = require("express");
const mongoose = require("mongoose");
const apidemo = require("./api");
cors = require("cors");

PORT = 3100;

const app = express();
app.use(apidemo); // this uses our api file endpoints in application
app.use(cors());
app.use(express.json()); // parse data using express.json()

app.get("", (req, res) => {
  res.send("Welcome to node mongoose and express connection !!");
});

// below url is mongoose url from mongodb site

//database ="mongodb+srv://client:client@client.db6nrqq.mongodb.net/?retryWrites=true&w=majority";
database =
  "mongodb+srv://shubham:Mahadev123@crud.9xa6hbx.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(database)
  .then(() => {
    console.log("Node connected with mongodb successfully !!");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
