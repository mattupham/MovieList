import React, { useReducer, useContext } from "react";
import { WatchFilter } from "src/contexts/filter-context";

export interface IMovie {
  title: string;
  watched: WatchFilter;
  year: number;
  runTime: number;
  metascore: number;
  imdbRating: number;
}

type Action =
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
  const [state, dispatch] = useReducer(movieReducer, [
    {
      title: "Batman",
      watched: WatchFilter.ToWatch,
      year: 1995,
      runTime: 107,
      metascore: 46,
      imdbRating: 6.2
    },
    {
      title: "Hackers",
      watched: WatchFilter.ToWatch,
      year: 1990,
      runTime: 62,
      metascore: 33,
      imdbRating: 7.8
    },
    {
      title: "The Grey",
      watched: WatchFilter.ToWatch,
      year: 1897,
      runTime: 23,
      metascore: 45,
      imdbRating: 2.5
    },
    {
      title: "Sunshine",
      watched: WatchFilter.ToWatch,
      year: 1122,
      runTime: 334,
      metascore: 64,
      imdbRating: 5.4
    },
    {
      title: "Ex Machina",
      watched: WatchFilter.ToWatch,
      year: 2030,
      runTime: 123,
      metascore: 125,
      imdbRating: 5.8
    }
  ]);
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
