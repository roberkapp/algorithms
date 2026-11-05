import { winningPositions } from './const';
import type { Players, Response } from './models';

export function ticTacToe(board: Players[][]): Response {
  const flatBoard = board.flat();

  for (const [a, b, c] of winningPositions) {
    if (flatBoard[a] === flatBoard[b] && flatBoard[b] === flatBoard[c])
      return `${flatBoard[a]} wins`;
  }
  return 'Draw';
}
