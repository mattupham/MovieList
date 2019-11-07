import React, { useState } from 'react';
import Search from 'src/components/Search/Search';
import AddMovie from './components/AddMovie/AddMovie';
import Movie from './components/Movie/Movie';

interface Movie {
  title: string;
  watched: boolean;
}

const movieList: Movie[] = [
  { title: 'Mean Girls', watched: false },
  { title: 'Hackers', watched: false },
  { title: 'The Grey', watched: false },
  { title: 'Sunshine', watched: false },
  { title: 'Ex Machina', watched: false },
];

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(movieList);

  const handleUpdateMovie = (index: number) => {
    const newMovies = [...movies];
    newMovies[index].watched = !newMovies[index].watched;
    setMovies(newMovies);
  };

  return (
    <div className="App">
      <header>Movie List</header>
      <div>
        <AddMovie
          handleAddMovie={(movieToAdd: string) => setMovies(movies.concat({ title: movieToAdd, watched: false }))}
        />
      </div>
      <div>
        <Search handleQuerySubmit={(query: string) => setSearchQuery(query)} />
      </div>
      <div>
        <ul>
          {movies
            .filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map(({ title, watched }: Movie, index: number) => (
              <Movie
                key={index}
                index={index}
                watched={watched}
                title={title}
                handleClick={(index: number) => handleUpdateMovie(index)}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
