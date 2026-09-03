type Direction = [number, number, string];

// marco las direcciones
const directions: Direction[] = [
  [0, 1, 'R'],
  [0, -1, 'L'],
  [1, 0, 'D'],
  [-1, 0, 'U'],
];

// @CodeScene(disable:"Bumpy Road Ahead")
// @CodeScene(disable:"Complex Method")
export function navigateTrail(map: string[]): string {
  const matrix = map.map((row) => [...row]);

  const curr: number[] = [];
  // primero busco el punto de partida
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const current = matrix[row][col];
      if (current !== 'C') continue;
      curr.push(row, col);
      break;
    }
    if (curr.length > 0) break;
  }

  // creo la función que va ir revisando posicion por posicion buscando el camino
  const pathFinder = (row: number, col: number): string => {
    const current = matrix[row][col];
    if (current === 'X') return '';
    // marco la posicion actual para saber que ya la visite.
    matrix[row][col] = 'X';

    //recorro las direcciones para armar el path
    for (const [dr, dc, dir] of directions) {
      const nextDirection = matrix[row + dr]?.[col + dc];
      // si con esta direccion actual puedo seguir entonces marco su dir y sigo recorriendo
      if (nextDirection === 'T') {
        return dir + pathFinder(row + dr, col + dc);
      }
      // una vez llegado al final retorno el camino recorrido
      if (nextDirection === 'G') {
        return dir;
      }
    }
    return '';
  };

  //invoco la función desde el punto de partida.
  const [row, col] = curr;
  return pathFinder(row, col);
}
