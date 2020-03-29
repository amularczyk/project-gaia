import React from 'react';
import Board from './components/board/board';
import PlayerBlue from './components/player/player-blue/player';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Board />
      <PlayerBlue />
    </div>
  );
}

export default App;
