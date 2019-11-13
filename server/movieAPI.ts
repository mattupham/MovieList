// import axios from "axios";
const axios = require("axios");
// import { WatchFilter } from "src/contexts/filter-context";

const TMDB_API_KEY = process.env.TMDB_API_KEY;

const getMovies = async () => {
  try {
    const movieData = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        params: { api_key: TMDB_API_KEY }
      }
    );
    return movieData;
  } catch (err) {
    console.log("ERR: ", err);
  }
};

const parseMovies = (movies: any[]) => {
  return movies.map(movie => {
    return {
      // id: movie.id,
      title: movie.title,
      // watched: WatchFilter.ToWatch,
      watched: 1,
      year: movie.release_date.slice(0, 4),
      runTime: Math.floor(Math.random() * 100),
      metascore: +movie.vote_average,
      imdbRating: +movie.vote_average
    };
  });
};

module.exports = {
  getMovies,
  parseMovies
};
