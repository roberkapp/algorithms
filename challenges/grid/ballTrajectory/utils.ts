import { directions } from './const';

export const calculateNextDirection = (
  ballPosition: number[],
  direction: number[],
  matrix: number[][],
): number[] => {
  const [row, col] = ballPosition;
  const [dr, dc] = direction;

  let nextDr = dr,
    nextDc = dc;
  const nextRow = row + dr;
  const nextCol = col + dc;

  if (nextRow < 0 || nextRow >= matrix.length) nextDr = -dr;
  if (nextCol < 0 || nextCol >= matrix[0].length) nextDc = -dc;
  return [row + nextDr, col + nextDc];
};

export const findBallDirection = (row: number, col: number, matrix: number[][]): number[] => {
  for (const [dr, dc] of directions) {
    const position = matrix[row + dr]?.[col + dc];
    if (position === undefined || position !== 2) continue;
    return calculateNextDirection([row + dr, col + dc], [dr, dc], matrix);
  }
  return [];
};
