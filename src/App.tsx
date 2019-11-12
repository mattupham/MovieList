import React, { useState } from "react";
import Search from "src/components/Search/Search";
import AddMovie from "src/components/AddMovie/AddMovie";
import MovieList from "src/components/MovieList/MovieList";
import ToggleWatch from "src/components/ToggleWatch/ToggleWatch";
import { MovieProvider } from "src/movie-context";
import { FilterProvider } from "src/filter-context";

const App: React.FC = () => {
  return (
    <MovieProvider>
      <FilterProvider>
        <div className="App">
          <header>Movie List</header>
          <div>
            <AddMovie />
          </div>
          <div>
            <ToggleWatch />
            <Search />
          </div>
          <div>
            <MovieList />
          </div>
        </div>
      </FilterProvider>
    </MovieProvider>
  );
};

export default App;
