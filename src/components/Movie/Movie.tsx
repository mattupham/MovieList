import React, { MouseEvent } from 'react';
import styles from 'src/components/Movie/Movie.module.scss';

interface IProps {
  index: number;
  watched: boolean;
  title: string;
  handleClick: (index: number) => void;
}

const Movie = ({ index, watched, title, handleClick }: IProps) => (
  <li className={styles.movieItem} key={index}>
    <div>{title}</div>
    <button onClick={(e: MouseEvent) => handleClick(index)} style={{ backgroundColor: watched ? 'green' : 'red' }}>
      {watched ? 'Watched' : 'To Watch'}
    </button>
  </li>
);

export default Movie;
