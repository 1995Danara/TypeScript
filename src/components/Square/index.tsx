import React from 'react';
import { Button } from '@mui/material';

import './styles.css';
import { SquareProps } from './interface';

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <Button
      variant="outlined"
      onClick={onSquareClick}
      sx={{
        width: 100,
        height: 100,
        fontSize: '2rem',
        color: value === 'X' ? 'primary.main' : 'secondary.main',
      }}
    >
      {value}
    </Button>
  );
};

export default Square;