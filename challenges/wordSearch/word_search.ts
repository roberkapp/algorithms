const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

// @CodeScene(disable:"Bumpy Road Ahead")
// @CodeScene(disable:"Complex Method")
export function findWord(matrix: string[][], word: string): number[][] {
  const findCoordinates = (row: number, col: number): number[][] | null => {
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

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const current = matrix[row][col];
      // si la letra no es con la que empieza la word no me sirve
      if (current !== word.at(0)?.toLowerCase()) continue;
      const coordinates = findCoordinates(row, col);
      if (coordinates) return coordinates;
    }
  }
  return [];
}
