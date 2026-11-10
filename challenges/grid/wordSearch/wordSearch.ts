import { findCoordinates } from './utils';

export function findWord(matrix: string[][], word: string): number[][] {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const current = matrix[row][col];
      // si la letra no es con la que empieza la word no me sirve
      if (current !== word.at(0)?.toLowerCase()) continue;
      const coordinates = findCoordinates(matrix, row, col, word);
      if (coordinates) return coordinates;
    }
  }
  return [];
}
