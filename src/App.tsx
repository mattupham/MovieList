import React, { useState } from 'react';
import styles from 'src/App.module.scss';
import Search from 'src/components/Search/Search';
import AddMovie from './components/AddMovie/AddMovie';

interface Movie {
  title: string;
}

const movieList: Movie[] = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(movieList);

  return (
    <div className="App">
      <header>Movie List</header>
      <div>
        <AddMovie handleAddMovie={(movieToAdd: string) => setMovies(movies.concat({ title: movieToAdd }))} />
      </div>
      <div>
        <Search handleQuerySubmit={(query: string) => setSearchQuery(query)} />
      </div>
      <div>
        <ul>
          {movies
            .filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map(({ title }: Movie, index: number) => (
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
