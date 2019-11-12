import React, { FormEvent, useState } from "react";
import { useFilterDispatch } from "src/filter-context";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useFilterDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </label>
      <input type="submit" value="Go" />
    </form>
  );
};

export default Search;
