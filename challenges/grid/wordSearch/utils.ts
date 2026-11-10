import { directions } from './const';

export const findCoordinates = (
  matrix: string[][],
  row: number,
  col: number,
  word: string,
): number[][] | null => {
  // recorro las direcciones
  for (const [dr, dc] of directions) {
    const nextLetter = matrix[row + dr]?.[col + dc];
    // si estoy en un borde o no coincide con la continuacion de la palabra sigo con la prox direction
    if (nextLetter === undefined || nextLetter !== word[1]) continue;

    // si la direction parece prometedora la recorro
    for (let i = 1; i < word.length; i++) {
      const nextRow = row + dr * i;
      const nextCol = col + dc * i;
      // en el momento que deja de coincidir salgo
      if (matrix[nextRow]?.[nextCol] !== word[i]) break;
      // si llego al tamaño es porque coincide asi que devuelvo las coordenadas
      if (i === word.length - 1)
        return [
          [row, col],
          [nextRow, nextCol],
        ];
    }
  }
  return null;
};
