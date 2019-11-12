import React from "react";

export default function ToggleWatch() {
  return (
    <div>
      <button
      // onClick={() => setWatchedFilter(true)}
      // style={{ background: watchedFilter ? "green" : "none" }}
      >
        Watched
      </button>
      <button
      // onClick={() => setWatchedFilter(false)}
      // style={{ background: watchedFilter ? "none" : "red" }}
      >
        To Watch
      </button>
    </div>
  );
}
