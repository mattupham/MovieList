import React, { useEffect, useState } from "react";
import Search from "src/components/Search/Search";
import AddMovie from "src/components/AddMovie/AddMovie";
import MovieList from "src/components/MovieList/MovieList";
import ToggleWatch from "src/components/ToggleWatch/ToggleWatch";
import { MovieProvider, useMovieDispatch } from "src/contexts/movie-context";
import { FilterProvider } from "src/contexts/filter-context";

const App: React.FC = () => {
  return (
    <MovieProvider>
      <FilterProvider>
        <div className="App">
          <header>Movie List</header>
          <div>
            <AddMovie />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
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
