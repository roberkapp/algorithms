// DFS (Depth First Search)

// La forma en la que hay que hacerlo es =
// Paso 1: checkeo que la direccion exista.
// Paso 2: checkeo que sea el oldValue.
// Paso 3: si existe y es oldValue tengo que updatearlo por el nuevo.
// Paso 4: voy vecino por vecino checkeando lo mismo y pintando de ser necesario
export function bucketFill(
  grid: string[][],
  [row, col]: number[],
  newValue: string
): string[][] {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const oldValue = grid[row][col];

  const updater = (r: number, c: number) => {
    if (grid[r]?.[c] !== oldValue) return;
    for (const [dr, dc] of directions) {
      grid[r][c] = newValue;
      updater(r + dr, c + dc);
    }
  };

  updater(row, col);
  return grid;
}
