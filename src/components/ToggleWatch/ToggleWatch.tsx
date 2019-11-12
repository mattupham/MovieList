import React from "react";
import {
  useFilterDispatch,
  WatchFilter,
  useFilterState
} from "src/filter-context";

export default function ToggleWatch() {
  const dispatch = useFilterDispatch();
  const { watchFilter } = useFilterState();

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "SET_WATCH_FILTER",
            payload:
              watchFilter !== WatchFilter.Watched
                ? WatchFilter.Watched
                : WatchFilter.All
          })
        }
        style={{
          background: watchFilter === WatchFilter.Watched ? "green" : "none"
        }}
      >
        Watched
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "SET_WATCH_FILTER",
            payload:
              watchFilter !== WatchFilter.ToWatch
                ? WatchFilter.ToWatch
                : WatchFilter.All
          })
        }
        style={{
          background: watchFilter === WatchFilter.ToWatch ? "red" : "none"
        }}
      >
        To Watch
      </button>
    </div>
  );
}
