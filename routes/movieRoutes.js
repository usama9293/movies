import addMovies from "../controllers/addMovies.js";
import express from "express";

const router = express.Router();


router.post("/add", addMovies);



export default router;


