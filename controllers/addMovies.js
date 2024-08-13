import Movie from "../model/movieModel"; // Assuming you have a Movie model defined

const addMovies = async (req, res) => {
  const { movie_name, info, rating } = req.body;

  // Validations
  try {
    if (!movie_name || !info || !rating) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    if (rating < 0 || rating > 10) {
      return res
        .status(400)
        .json({ message: "Please provide a valid rating between 0 and 10" });
    }

    // Create new movie
    const newMovie = new Movie({
      movie_name,
      info,
      rating,
    });

    // Save movie
    const savedMovie = await newMovie.save();
    res.json(savedMovie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default addMovies;
