const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

// @CodeScene(disable:"Bumpy Road Ahead")
export function findLandingSpot(matrix: number[][]): number[] {
  let lowerDanger = Infinity;
  let bestSpot: number[] = [];

  const neigboorsChecker = (row: number, col: number) => {
    const curr = matrix[row][col];
    if (curr !== 0) return;

    let currentDanger = 0;

    for (const [dr, dc] of directions) {
      const neighboor = matrix[row + dr]?.[col + dc];
      if (neighboor === undefined) continue;
      currentDanger += neighboor;
    }

    if (currentDanger < lowerDanger) {
      lowerDanger = currentDanger;
      bestSpot = [row, col];
    }
  };

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      neigboorsChecker(row, col);
    }
  }

  return bestSpot;
}
