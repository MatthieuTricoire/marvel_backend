//? Express import
const express = require("express");

//? Routes setup
const router = express.Router();

//? Axios import
const axios = require("axios");

//? ----- Get CHARACTERS -----

router.get("/characters", async (req, res) => {
  try {
    const name = req.query.name || "";
    const skip = req.query.skip || "0";
    const limit = req.query.limit || "100";

    console.log(req.query.skip);
    console.log(req.query.name);

    const characters = await axios.get(
      ` https://lereacteur-marvel-api.herokuapp.com/characters?name=${name}&limit=${limit}&skip=${skip}&apiKey=${process.env.API_MARVEL_KEY}`
    );
    res.status(200).json(characters.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//? ----- Get CHARACTER BY ID -----
router.get("/characterId/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const character = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${id}?apiKey=${process.env.API_MARVEL_KEY}`
    );
    res.status(200).json(character.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
