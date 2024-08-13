import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  movie_name: {
    type: String,
  },
  info: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
