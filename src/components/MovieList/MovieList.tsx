import React from "react";
import { useMovieState, IMovie } from "src/movie-context";
import {
  useFilterState,
  WatchFilter as WatchFilters
} from "src/filter-context";
import Movie from "src/components/Movie/Movie";

const watchFilterFunc = (movie: IMovie, curWatchFilter: WatchFilters) => {
  if (curWatchFilter === WatchFilters.All) return true;
  return curWatchFilter === movie.watched;
};

const searchFilterFunc = (movie: IMovie, curSearchFilter: string) => {
  return movie.title.toLowerCase().includes(curSearchFilter.toLowerCase());
};

export default function MovieList() {
  const movies = useMovieState();
  const { watchFilter, searchQuery } = useFilterState();

  return (
    <ul>
      {movies
        .filter(movie => watchFilterFunc(movie, watchFilter))
        .filter(movie => searchFilterFunc(movie, searchQuery))
        .map((movie: IMovie, index: number) => (
          <Movie key={index} index={index} movie={movie} />
        ))}
    </ul>
  );
}
