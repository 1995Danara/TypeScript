import { SquareType } from '../../types/types';

export interface BoardProps {
  xIsNext: boolean;
  squares: SquareType[];
  onPlay: (squares: SquareType[]) => void;
}
