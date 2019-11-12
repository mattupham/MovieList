import axios from "axios";
import { WatchFilter } from "src/contexts/filter-context";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const getMovies = async () => {
  console.log("PROCESS ENV: ", process.env);
  console.log("API KEY: ", TMDB_API_KEY);
  const movieData = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing",
    {
      params: { api_key: TMDB_API_KEY }
    }
  );
  console.log("MOVIE DATA: ", movieData);
  return movieData;
};

export const parseMovies = (movies: any[]) => {
  return movies.map(movie => {
    return {
      // id: movie.id,
      title: movie.title,
      watched: WatchFilter.ToWatch,
      year: movie.release_date.slice(0, 4),
      runTime: Math.floor(Math.random() * 100),
      metascore: +movie.vote_average,
      imdbRating: +movie.vote_average
    };
  });
};
