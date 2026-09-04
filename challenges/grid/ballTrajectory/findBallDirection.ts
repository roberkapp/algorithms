import { findBallDirection } from './utils';

// @CodeScene(disable:"Deep, Nested Complexity")
export function getNextLocation(matrix: number[][]): number[] {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) {
        const nextPosition = findBallDirection(row, col, matrix);
        if (nextPosition) return nextPosition;
      }
    }
  }
  return [];
}
