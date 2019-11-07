import React, { FormEvent, useState } from 'react';

interface IProps {
  handleQuerySubmit: (query: string) => void;
}

const Search = ({ handleQuerySubmit }: IProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleQuerySubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Search;
