import addMovies from "../controllers/addMovies.js";
import express from "express";
import { getMovies, getMovieById } from "../controllers/getMovies.js";
import updateMovie from "../controllers/updateMovie.js";
import delMovie from "../controllers/delMovie.js";

const router = express.Router();

router.post("/add", addMovies);
router.get("/get", getMovies);
router.get("/get/:id", getMovieById); //get movie by id
router.put("/update/:id", updateMovie); //update movie by id
router.delete("/delete/:id", delMovie); //delete movie by id

export default router;
