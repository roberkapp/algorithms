interface Tower {
  row: number;
  col: number;
  distance: number;
}

// @CodeScene(disable:"Bumpy Road Ahead")
// @CodeScene(disable:"Deep, Nested Complexity")
// @CodeScene(disable:"Complex Method")
export function findSignal(grid: number[][]): number[] {
  // guardo las posiciones de las torres y la distancia al phone;
  const towers: Tower[] = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const current = grid[row][col];
      if (current > 0) {
        towers.push({
          row,
          col,
          distance: current,
        } as Tower);
      }
    }
  }

  // recorro una vez mas para comparar si el punto donde estoy parado puede ser el cell
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] > 0) continue;
      let valid = true;

      for (const tower of towers) {
        // checkeo si esta en la misma linea,row o diagonal de la torre
        const dr = Math.abs(row - tower.row);
        const dc = Math.abs(col - tower.col);

        // si dr === dc quiere decir que es diagonal
        const aligned = dr === 0 || dc === 0 || dr === dc;
        // el math max checkea que de estar alieneado coincida la distancia marcada
        // sino salgo del loop y voy al siguiente;
        if (!aligned || Math.max(dc, dr) !== tower.distance) {
          valid = false;
          break;
        }
      }
      if (valid) {
        return [row, col];
      }
    }
  }
  return [0, 0];
}
