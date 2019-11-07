import React from 'react';
import logo from 'src/logo.svg';
import 'src/App.css';

interface Movie {
  title: string
}

const movies: Movie[]  = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <ul>
          {movies.map(({ title }: Movie) => {
            <li>{title}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
