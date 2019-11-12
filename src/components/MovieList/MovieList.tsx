import React from "react";
import { useMovieState, IMovie } from "src/movie-context";
import {
  useFilterState,
  WatchFilter as WatchFilters
} from "src/filter-context";
import Movie from "src/components/Movie/Movie";

const filterFunc = (movie: IMovie, currentWatchFilter: WatchFilters) => {
  console.log("MOVIE WATCHED: ", currentWatchFilter === WatchFilters.All);
  if (currentWatchFilter === WatchFilters.All) return true;
  return currentWatchFilter === movie.watched;
};

export default function MovieList() {
  const movies = useMovieState();
  const { watchFilter, searchQuery } = useFilterState();

  return (
    <ul>
      {movies
        .filter(movie => filterFunc(movie, watchFilter))
        // .filter(movie => movie.watched === watchFilter)
        .map((movie: IMovie, index: number) => (
          <Movie key={index} index={index} movie={movie} />
        ))}
    </ul>
  );
}
