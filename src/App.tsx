import React, { useState } from 'react';
import styles from 'src/App.module.scss';
import Search from 'src/components/Search/Search';

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
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <header>Movie List</header>
      <div>
        <Search handleQuerySubmit={(query: string) => setSearchQuery(query)} />
      </div>
      <div>
        {searchQuery === '' ? (
          <div>Please search for a movie</div>
        ) : (
          <ul>
            {movies
              .filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map(({ title }: Movie, index: number) => (
                <li className={styles.movieItem} key={index}>
                  {title}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
