import React from 'react';
import Board from './components/board/board';
import PlayerBlue from './components/player/player-blue/player';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        
      </header>
      <body>
        <Board />
        <PlayerBlue />
      </body>
    </div>
  );
}

export default App;
