//? Environment variables
require("dotenv").config();

//? Cors import
const cors = require("cors");

//? Express import
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());

//? Routes
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

//? Tous les chemins mènent à Rome
app.all("*", (req, res) => {
  res.status(200).json({ message: "Vous êtes bien arrivé à Rome." });
});
app.listen(process.env.PORT || 4000, () => {
  console.log("🚀 🚀  Server started  🚀 🚀");
});
