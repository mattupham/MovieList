import React, { useReducer, useContext } from "react";

export enum WatchFilter {
  Watched,
  ToWatch,
  All
}

interface FilterState {
  searchQuery: string;
  watchFilter: WatchFilter;
}

type Action =
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SET_WATCH_FILTER"; payload: WatchFilter };

type Dispatch = (action: Action) => void;
type State = FilterState;
type FilterProviderProps = { children: React.ReactNode };

const FilterStateContext = React.createContext<State | undefined>(undefined);
const FilterDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

export function filterReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_SEARCH_QUERY": {
      return { ...state, searchQuery: action.payload };
    }
    case "SET_WATCH_FILTER": {
      return { ...state, watchFilter: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

function FilterProvider({ children }: FilterProviderProps) {
  const [state, dispatch] = useReducer(filterReducer, {
    searchQuery: "",
    watchFilter: WatchFilter.All
  });
  return (
    <FilterStateContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
}

function useFilterState() {
  const context = useContext(FilterStateContext);
  if (context === undefined) {
    throw new Error("useFilterState must be used within a FilterProvider");
  }
  return context;
}

function useFilterDispatch() {
  const context = useContext(FilterDispatchContext);
  if (context === undefined) {
    throw new Error("useFilterDispatch must be used within a FilterProvider");
  }
  return context;
}
export { FilterProvider, useFilterState, useFilterDispatch };
