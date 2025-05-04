const express = require('express');

const { getAnimes, createAnime } = require('../controllers/Animes');
const router = express.Router();

router.get("/animes", getAnimes)

router.post("/createanime", createAnime)

module.exports = router;