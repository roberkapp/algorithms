import { Grid } from './models';

export const findZero = (grid: Grid): number[] => {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return [];
};

export const getRowSum = (
  grid: Grid,
  zeroRow: number
): { magicNumRow: number; isPossibleRow: boolean } => {
  let magicNumRow = 0,
    isPossibleRow = true;

  for (let row = 0; row < grid.length; row++) {
    if (row === zeroRow) continue;
    const rowSum = grid[row].reduce((acc, curr) => (acc += curr), 0);
    if (magicNumRow > 0 && rowSum !== magicNumRow) {
      isPossibleRow = false;
      break;
    } else {
      magicNumRow = rowSum;
    }
  }
  return { magicNumRow, isPossibleRow };
};

export const getColSum = (
  grid: Grid,
  zeroCol: number
): { magicNumCol: number; isPossibleCol: boolean } => {
  let magicNumCol = 0,
    isPossibleCol = true;
  for (let col = 0; col < grid.length; col++) {
    if (col === zeroCol) continue;
    const colSum = grid[0][col] + grid[1][col] + grid[2][col];
    if (magicNumCol > 0 && colSum !== magicNumCol) {
      isPossibleCol = false;
      break;
    } else {
      magicNumCol = colSum;
    }
  }
  return { magicNumCol, isPossibleCol };
};

export const getDiagonalSum = (
  grid: Grid
): { diagonalSum: number | null; isPossible: boolean } => {
  let diagonalSum = null,
    isPossible = true;

  if (grid[0][0] && grid[1][1] && grid[2][2]) {
    diagonalSum = grid[0][0] + grid[1][1] + grid[2][2];
  }

  if (grid[0][2] && grid[1][1] && grid[2][0]) {
    const secondaryDiagonal = grid[0][2] + grid[1][1] + grid[2][0];
    if (diagonalSum && diagonalSum !== secondaryDiagonal) {
      isPossible = false;
    }
  }
  return { diagonalSum, isPossible };
};

export const getMagicNumber = (
  grid: Grid,
  zeroRow: number,
  zeroCol: number
) => {
  const { magicNumRow, isPossibleRow } = getRowSum(grid, zeroRow);
  const { magicNumCol, isPossibleCol } = getColSum(grid, zeroCol);
  const { diagonalSum, isPossible } = getDiagonalSum(grid);
  if (
    !isPossibleRow ||
    !isPossibleCol ||
    !isPossible ||
    magicNumCol !== magicNumRow ||
    (diagonalSum && diagonalSum !== magicNumRow)
  )
    return null;

  return magicNumRow;
};
