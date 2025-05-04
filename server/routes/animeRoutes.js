const express = require('express');

const { getAnimes, createAnime, getAnime } = require('../controllers/Animes');
const router = express.Router();

router.get("/animes", getAnimes)
router.post("/createanime", createAnime)
router.get("/anime", getAnime)
module.exports = router;