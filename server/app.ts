// lib/app.ts
const express = require("express");

// Create a new express application instance
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
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

const movies = [
  {
    title: "Batman",
    watched: WatchFilter.ToWatch,
    year: 1995,
    runTime: 107,
    metascore: 46,
    imdbRating: 6.2
  },
  {
    title: "Hackers",
    watched: WatchFilter.ToWatch,
    year: 1990,
    runTime: 62,
    metascore: 33,
    imdbRating: 7.8
  },
  {
    title: "The Grey",
    watched: WatchFilter.ToWatch,
    year: 1897,
    runTime: 23,
    metascore: 45,
    imdbRating: 2.5
  },
  {
    title: "Sunshine",
    watched: WatchFilter.ToWatch,
    year: 1122,
    runTime: 334,
    metascore: 64,
    imdbRating: 5.4
  },
  {
    title: "Ex Machina",
    watched: WatchFilter.ToWatch,
    year: 2030,
    runTime: 123,
    metascore: 125,
    imdbRating: 5.8
  }
];
