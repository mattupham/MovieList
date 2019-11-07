import React from 'react';
import 'src/App.css';

interface Movie {
  title: string;
}

const movies: Movie[] = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Movie List</header>
      <div>
        <ul>
          {movies.map(({ title }: Movie) => {
            <li>{title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
