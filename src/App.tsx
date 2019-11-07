import React from 'react';
import styles from 'src/App.module.scss';

interface Movie {
  title: string;
}

const movies: Movie[] = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <header>Movie List</header>
      <div>
        <ul>
          {movies.map(({ title }: Movie, index: number) => (
            <li className={styles.movieItem} key={index}>
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
