import type { Grid, ResponseMagicSquare } from './models';
import { findZero, getMagicNumber } from './utils';

export function solveMagicSquare(grid: Grid): ResponseMagicSquare {
  const [row, col] = findZero(grid);
  const magicNumber = getMagicNumber(grid, row, col);
  if (!magicNumber) return 'impossible';

  const differentRowTotal = grid[row].reduce((acc, curr) => (acc += curr), 0);
  const missingNumber = magicNumber - differentRowTotal;
  return missingNumber;
}
