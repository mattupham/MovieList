import React, { useState } from "react";
import Search from "src/components/Search/Search";
import AddMovie from "src/components/AddMovie/AddMovie";
import MovieList from "src/components/MovieList/MovieList";
import { IMovie, MovieProvider } from "src/movie-context";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [watchedFilter, setWatchedFilter] = useState(false);

  return (
    <MovieProvider>
      <div className="App">
        <header>Movie List</header>
        <div>
          <AddMovie />
        </div>
        <div>
          <Search
            handleQuerySubmit={(query: string) => setSearchQuery(query)}
          />
        </div>
        <div>
          <button
            onClick={() => setWatchedFilter(true)}
            style={{ background: watchedFilter ? "green" : "none" }}
          >
            Watched
          </button>
          <button
            onClick={() => setWatchedFilter(false)}
            style={{ background: watchedFilter ? "none" : "red" }}
          >
            To Watch
          </button>
        </div>
        <div>
          <MovieList />
        </div>
      </div>
    </MovieProvider>
  );
};

export default App;
