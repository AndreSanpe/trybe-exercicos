import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
      </header>
    </div>
  );
}
}

export default App;
