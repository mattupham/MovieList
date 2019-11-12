import React, { FormEvent, useState } from "react";
import { IMovie, useMovieDispatch } from "src/contexts/movie-context";
import { WatchFilter } from "src/contexts/filter-context";
import axios from "axios";

const createNumber = (base: number) => {
  return Math.floor(Math.random() * base);
};

const createNewMovie = (movieTitle: string): IMovie => {
  return {
    title: movieTitle,
    watched: WatchFilter.ToWatch,
    year: createNumber(1000),
    runTime: createNumber(100),
    metascore: createNumber(10),
    imdbRating: createNumber(1)
  };
};

const AddMovie: React.FC = () => {
  const [movieToAdd, setMovieToAdd] = useState("");
  const dispatch = useMovieDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMovie = createNewMovie(movieToAdd);
    // dispatch({ type: "ADD_MOVIE", payload: newMovie });
    await axios.post("http://localhost:8080/movie", { movie: newMovie });
    const { data: newMovies } = await axios.get("http://localhost:8080/movies");
    dispatch({ type: "ADD_INITIAL_MOVIES", payload: newMovies });
    setMovieToAdd("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Movie:
        <input
          type="text"
          value={movieToAdd}
          onChange={e => setMovieToAdd(e.target.value)}
        />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddMovie;
