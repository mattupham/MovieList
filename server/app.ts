// lib/app.ts
const express = require("express");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const movieAPI = require("./movieAPI");

// Create a new express application instance
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/load", async (req, res) => {
  const { data } = await movieAPI.getMovies();
  const parsedMovies = movieAPI.parseMovies(data.results);
  parsedMovies.forEach(movie => movies.push(movie));
  res.send(movies);
});

app.get("/movies", function(req, res) {
  res.send(movies);
});

app.post("/movie", function(req, res) {
  const movie = req.body.movie;
  movies.push(movie);
  res.send("ok");
});

enum WatchFilter {
  Watched,
  ToWatch,
  All
}

const movies = [];
