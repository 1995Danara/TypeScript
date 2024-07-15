import React from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';

import Square from '../Square';
import { calculateWinner } from '../Square/utils';
import './styles.css';
import { BoardProps } from '../Board/interface';

const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#d32f2f',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ textAlign: 'center', p: 2 }}>
        <Box sx={{ mb: 2, fontSize: '1.5rem' }}>{status}</Box>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Board;