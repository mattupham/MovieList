import React, { useReducer, useContext, useEffect } from "react";
import { WatchFilter } from "src/contexts/filter-context";
import axios from "axios";
export interface IMovie {
  title: string;
  watched: WatchFilter;
  year: number;
  runTime: number;
  metascore: number;
  imdbRating: number;
}

type Action =
  | { type: "ADD_INITIAL_MOVIES"; payload: IMovie[] }
  | { type: "ADD_MOVIE"; payload: IMovie }
  | { type: "DELETE_MOVIE"; payload: number }
  | { type: "TOGGLE_WATCHED"; payload: number };
type Dispatch = (action: Action) => void;
type State = IMovie[];
type MovieProviderProps = { children: React.ReactNode };

const MovieStateContext = React.createContext<State | undefined>(undefined);
const MovieDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const toggleWatched = (movies: State, index: number) => {
  const newMovies = [...movies];
  newMovies[index].watched =
    newMovies[index].watched === WatchFilter.Watched
      ? WatchFilter.ToWatch
      : WatchFilter.Watched;
  return newMovies;
};

const deleteMovie = (movies: State, index: number) => {
  const newMovies = [...movies];
  newMovies.splice(index, 1);
  return newMovies;
};

export function movieReducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_INITIAL_MOVIES": {
      return action.payload;
    }
    case "ADD_MOVIE": {
      return [...state, action.payload];
    }
    case "DELETE_MOVIE": {
      return deleteMovie(state, action.payload);
    }
    case "TOGGLE_WATCHED": {
      return toggleWatched(state, action.payload);
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

function MovieProvider({ children }: MovieProviderProps) {
  const [state, dispatch] = useReducer(movieReducer, []);

  useEffect(() => {
    async function loadMovies() {
      const { data: movies } = await axios.get("http://localhost:8080/movies");
      dispatch({ type: "ADD_INITIAL_MOVIES", payload: movies });
    }
    loadMovies();
  }, []);

  return (
    <MovieStateContext.Provider value={state}>
      <MovieDispatchContext.Provider value={dispatch}>
        {children}
      </MovieDispatchContext.Provider>
    </MovieStateContext.Provider>
  );
}

function useMovieState() {
  const context = useContext(MovieStateContext);
  if (context === undefined) {
    throw new Error("useMovieState must be used within a MovieProvider");
  }
  return context;
}

function useMovieDispatch() {
  const context = useContext(MovieDispatchContext);
  if (context === undefined) {
    throw new Error("useMovieDispatch must be used within a MovieProvider");
  }
  return context;
}
export { MovieProvider, useMovieState, useMovieDispatch };
