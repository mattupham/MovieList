import React, { FormEvent, useState } from "react";
import { IMovie, useMovieDispatch } from "src/movie-context";
import { WatchFilter } from "src/filter-context";

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: "ADD_MOVIE", payload: createNewMovie(movieToAdd) });
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
