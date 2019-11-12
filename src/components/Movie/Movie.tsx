import React, { MouseEvent, useState } from "react";
import { IMovie, useMovieDispatch } from "src/movie-context";
import { WatchFilter } from "src/filter-context";
import styles from "src/components/Movie/Movie.module.scss";

interface IProps {
  movie: IMovie;
  index: number;
}

const Movie = ({ movie, index }: IProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useMovieDispatch();

  return (
    <li className={styles.movieItem} key={index}>
      <div className={styles.titleContainer}>
        <div onClick={e => setShowDetails(!showDetails)}>
          <div>{movie.title}</div>
        </div>
        <div>
          <button
            onClick={() => dispatch({ type: "TOGGLE_WATCHED", payload: index })}
            style={{
              backgroundColor:
                movie.watched === WatchFilter.Watched ? "green" : "red"
            }}
          >
            {movie.watched === WatchFilter.Watched ? "Watched" : "To Watch"}
          </button>
          <button
            onClick={() => dispatch({ type: "DELETE_MOVIE", payload: index })}
          >
            Delete
          </button>
        </div>
      </div>
      {showDetails && (
        <div>
          <div>{`Year ${movie.year}`}</div>
          <div>{`Runtime ${movie.runTime}`}</div>
          <div>{`MetaScore ${movie.metascore}`}</div>
          <div>{`Imdb Rating ${movie.imdbRating}`}</div>
        </div>
      )}
    </li>
  );
};

export default Movie;
