import React from 'react';

type SquareType = 'X' | 'O' | null;

interface SquareProps{
 value: SquareType;
 onSquareClick: () => void;
}

const  Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }
  export default Square;