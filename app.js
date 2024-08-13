import express from "express";
import movieRoutes from "./routes/movieRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
import Movie from "./model/movieModel.js";
//use movies mode;

const app = express();
app.use(express.json());

app.use("/api", movieRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("server running");
});
