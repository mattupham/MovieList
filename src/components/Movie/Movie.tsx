import React, { MouseEvent, useState } from "react";
import { IMovie } from "src/movie-context";
import styles from "src/components/Movie/Movie.module.scss";

interface IProps {
  movie: IMovie;
  index: number;
  handleClick: (index: number) => void;
}

const Movie = ({ movie, index, handleClick }: IProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li
      onClick={e => setShowDetails(!showDetails)}
      className={styles.movieItem}
      key={index}
    >
      <div className={styles.titleContainer}>
        <div>{movie.title}</div>
        <button
          onClick={(e: MouseEvent) => handleClick(index)}
          style={{ backgroundColor: movie.watched ? "green" : "red" }}
        >
          {movie.watched ? "Watched" : "To Watch"}
        </button>
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
