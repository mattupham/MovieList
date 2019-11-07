import React, { FormEvent, useState } from 'react';

interface IProps {
  handleAddMovie: (query: string) => void;
}

const AddMovie = ({ handleAddMovie }: IProps) => {
  const [movieToAdd, setMovieToAdd] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddMovie(movieToAdd);
    setMovieToAdd('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Movie:
        <input type="text" value={movieToAdd} onChange={e => setMovieToAdd(e.target.value)} />
      </label>
      <input type="submit" value="Go" />
    </form>
  );
};

export default AddMovie;
