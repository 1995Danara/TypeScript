import React, {useState} from 'react';
import Board from '../components/Board';  

type SquareType = 'X' | 'O' | null;
type HistoryType = SquareType[][];


const Game: React.FC = () =>   {
    const [history, setHistory] = useState<HistoryType>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
  
    const  handlePlay = (nextSquares:SquareType []) =>  {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    const  jumpTo = (nextMove:number): void => {
      setCurrentMove(nextMove);
    };
  
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  
    return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
  export default Game;