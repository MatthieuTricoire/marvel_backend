//? Express import
const express = require("express");

//? Routes setup
const router = express.Router();

//? Axios import
const axios = require("axios");

//? ----- Get COMICS -----

router.get("/comics", async (req, res) => {
  try {
    const title = req.query.title || "";
    const skip = req.query.skip || "0";
    const limit = req.query.limit || "100";

    const comics = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?title=${title}&limit=${limit}&skip=${skip}&apiKey=${process.env.API_MARVEL_KEY}`
    );

    res.status(200).json(comics.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//? ----- Get ALL COMICS CONTAINING A CHARACTER (ID) -----
router.get("/comics/character/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const comics = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${process.env.API_MARVEL_KEY}`
    );
    res.status(200).json(comics.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
