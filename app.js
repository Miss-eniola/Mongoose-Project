dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const route = require("./routes/books.routes.js");

app.use(express.json());

app.use("/api", route);

app.get("/", (req, res) => {
  res.send("Hello!");
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("You're connected to MongoDB");
  })
  .catch((err) => {
    console.log("You're not connected to MongoDB", err);
  });

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
