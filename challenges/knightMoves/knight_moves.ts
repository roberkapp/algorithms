export function knightMoves(position: string): number {
  const directions = [
    [1, -2],
    [1, 2],
    [-1, -2],
    [-1, 2],
    [2, -1],
    [2, 1],
    [-2, 1],
    [-2, -1],
  ];

  const col = position[0].charCodeAt(0) - 65; // Las letras en el tablero van de A-H
  const row = 8 - Number(position[1]); // las filas son 8 asi que si resto el numero de la posicion, obtengo la fila de abajo hacia arriba

  let moves = 0;
  for (const [dr, dc] of directions) {
    const rowExist = row + dr >= 0 && row + dr <= 7;
    const colExist = col + dc >= 0 && col + dc <= 7;

    if (!rowExist || !colExist) continue;
    moves++;
  }

  return moves;
}
