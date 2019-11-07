import React, { useState } from 'react';
import Search from 'src/components/Search/Search';
import AddMovie from './components/AddMovie/AddMovie';
import Movie from './components/Movie/Movie';

export interface IMovie {
  title: string;
  watched: boolean;
  year: number;
  runTime: number;
  metascore: number;
  imdbRating: number;
}

const movieList: IMovie[] = [
  { title: 'Mean Girls', watched: false, year: 1995, runTime: 107, metascore: 46, imdbRating: 6.2 },
  { title: 'Hackers', watched: false, year: 1990, runTime: 62, metascore: 33, imdbRating: 7.8 },
  { title: 'The Grey', watched: false, year: 1897, runTime: 23, metascore: 45, imdbRating: 2.5 },
  { title: 'Sunshine', watched: false, year: 1122, runTime: 334, metascore: 64, imdbRating: 5.4 },
  { title: 'Ex Machina', watched: false, year: 2030, runTime: 123, metascore: 125, imdbRating: 5.8 },
];

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(movieList);
  const [watchedFilter, setWatchedFilter] = useState(false);

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
          handleAddMovie={(movieToAdd: string) =>
            setMovies(
              movies.concat({
                title: movieToAdd,
                watched: false,
                year: Math.random() * 1000,
                runTime: Math.random() * 100,
                metascore: Math.random() * 10,
                imdbRating: Math.random() * 1,
              })
            )
          }
        />
      </div>
      <div>
        <Search handleQuerySubmit={(query: string) => setSearchQuery(query)} />
      </div>
      <div>
        <button onClick={() => setWatchedFilter(true)} style={{ background: watchedFilter ? 'green' : 'none' }}>
          Watched
        </button>
        <button onClick={() => setWatchedFilter(false)} style={{ background: watchedFilter ? 'none' : 'red' }}>
          To Watch
        </button>
      </div>
      <div>
        <ul>
          {movies
            .filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .filter(movie => movie.watched === watchedFilter)
            .map((movie: IMovie, index: number) => (
              <Movie
                key={index}
                index={index}
                movie={movie}
                handleClick={(index: number) => handleUpdateMovie(index)}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
