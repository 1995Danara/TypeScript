import { SquareType } from '../Square/SquareType';

export interface BoardProps {
  xIsNext: boolean;
  squares: SquareType[];
  onPlay: (squares: SquareType[]) => void;
}