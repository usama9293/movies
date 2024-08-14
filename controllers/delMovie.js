
import Movie from "../model/movieModel.js";

const delMovie = async (req, res) => {
    try {
        const deletedMovie = await Movie.deleteOne({ _id: req.params.id });
        res.json(deletedMovie);
    } catch (error) {
        res.status(500).json({ error: "Failed to delete movie" });
    }
}

export default delMovie;