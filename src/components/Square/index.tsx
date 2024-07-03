import React from 'react';

import {SquareType} from '../Square/SquareType';
import './styles.css'; 

 

interface SquareProps{
 value: SquareType;
 onSquareClick: () => void;
}

const  Square = ({ value, onSquareClick }: SquareProps ) => {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  };
  export default Square;