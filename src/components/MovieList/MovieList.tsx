import React from "react";
import { useMovieState, IMovie, useMovieDispatch } from "src/movie-context";
import Movie from "src/components/Movie/Movie";

export default function MovieList() {
  const movies = useMovieState();
  const dispatch = useMovieDispatch();

  const toggleWatched = (index: number) => {
    dispatch({ type: "TOGGLE_WATCHED", payload: index });
  };

  return (
    <ul>
      {movies
        // .filter(movie =>
        //   movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        // )
        // .filter(movie => movie.watched === watchedFilter)
        .map((movie: IMovie, index: number) => (
          <Movie
            key={index}
            index={index}
            movie={movie}
            handleClick={(index: number) => toggleWatched(index)}
          />
        ))}
    </ul>
  );
}
