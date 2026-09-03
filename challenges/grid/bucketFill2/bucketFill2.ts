const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

// @CodeScene(disable:"Bumpy Road Ahead")
export function bucketFill2(grid: string[][], targetColor: string): number {
  // contador
  let clicks = 0;

  const paintArea = (row: number, col: number, color: string): void => {
    // si el vecino que busco es de color distinto al area que estoy pintando al momento salgo.
    if (grid[row]?.[col] !== color) return;
    // pinto la celda
    grid[row][col] = targetColor;

    //sigo por los vecinos
    for (const [dr, dc] of directions) {
      if (grid[row + dr]?.[col + dc] === undefined) continue;
      paintArea(row + dr, col + dc, color);
    }
  };

  // recorro la grid por regiones
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      // obtengo el color actual, si es igual al buscado sigo con el siguiente
      const color = grid[row][col];
      if (color === targetColor) continue;
      //encuentro una region distinta, aumento el contador y pinto
      clicks++;
      paintArea(row, col, color);
    }
  }

  return clicks;
}
