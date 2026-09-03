const directions = {
  leftTop: [-1, -1],
  top: [-1, 0],
  rightTop: [-1, 1],
  left: [0, -1],
  right: [0, 1],
  leftBottom: [1, -1],
  bottom: [1, 0],
  rightBottom: [1, 1],
};

const cellChecker = (row: number, col: number, grid: number[][]): number => {
  const currentCell = grid[row][col];

  let neighborsAlive = 0;
  // dr stands for delta row and dc for delta column
  for (const [_, [dr, dc]] of Object.entries(directions)) {
    const neighbor = grid[row + dr]?.[col + dc];
    if (!neighbor) continue;
    neighborsAlive++;
  }

  const isAlive = currentCell === 1;

  if (isAlive) {
    return neighborsAlive === 2 || neighborsAlive === 3 ? 1 : 0;
  }
  return neighborsAlive === 3 ? 1 : 0;
};

export function gameOfLife(grid: number[][]): number[][] {
  const response: number[][] = [];
  for (let row = 0; row < grid.length; row++) {
    const newRow = [];
    for (let col = 0; col < grid[row].length; col++) {
      const updatedCell = cellChecker(row, col, grid);
      newRow.push(updatedCell);
    }
    response.push(newRow);
  }
  return response;
}
