import express from "express"
const router = express.Router();
const { getMovies } = require("../controllers/moviesController");
// const { errorHandler }  = require('../middlewares/moviesMiddleware');

router.get("/movies", getMovies);

module.exports = router;