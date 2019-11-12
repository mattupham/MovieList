import React from "react";
import { useMovieState, IMovie, useMovieDispatch } from "src/movie-context";
import { useFilterState } from "src/filter-context";
import Movie from "src/components/Movie/Movie";

export default function MovieList() {
  const movies = useMovieState();
  const { watchFilter, searchQuery } = useFilterState();

  return (
    <ul>
      {movies
        // .filter(movie =>
        //   movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        // )
        // .filter(movie => movie.watched === watchFilter)
        .map((movie: IMovie, index: number) => (
          <Movie key={index} index={index} movie={movie} />
        ))}
    </ul>
  );
}
