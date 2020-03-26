import React from 'react';
import Board from './components/board/board';
import PlayerBlue from './components/player-blue/player';
import './App.css';

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
