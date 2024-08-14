import Movie from "../model/movieModel.js";

const updateMovie = async (req, res) => {
  try {
    // Find the movie by ID and update it
    const updatedMovie = await Movie.updateOne(
      { _id: req.params.id },
      {
        $set: {
          movie_name: req.body.movie_name,
          info: req.body.info,
          rating: req.body.rating,
        },
      }
    );

    // Check if a movie was actually updated
    if (updatedMovie.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "Movie not found or no changes made" });
    }

    // Respond with the updated movie details
    res.json({
      message: "Movie updated successfully",
      updatedMovie: {
        _id: req.params.id,
        movie_name: req.body.movie_name,
        info: req.body.info,
        rating: req.body.rating,
      },
    });
  } catch (error) {
    // Handle errors
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export default updateMovie;
