import React from 'react';

import { SquareType } from '../../types/types';
import './styles.css'; 
import { SquareProps } from './interface';

const  Square = ({ value, onSquareClick }: SquareProps ) => {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  };
  export default Square;