import React from 'react';
import Game from './components/Game';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Game />
    </div>
  );
};

export default App;
