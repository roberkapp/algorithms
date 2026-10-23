import type { Grid } from './models';
import { isComplete, paintRegion, serialize } from './utils';
export function bucketFill3(grid: Grid, targetColor: string) {
  const rows = grid.length;
  const cols = grid[0].length;

  // Los colores disponibles para realizar clicks.
  const colors = [...new Set(grid.flat()), targetColor];

  const queue: Array<[Grid, number]> = [[grid, 0]];
  const visited = new Set([serialize(grid)]);

  let head = 0;

  while (head < queue.length) {
    // Tomamos el la última grilla disponible y aumentamos el head para la siguiente iteración.
    const [currentGrid, clicks] = queue[head++];
    // La función siempre va a devolver el mejor resultado posible como primera opción una vez que la grilla este uniforme.
    if (isComplete(currentGrid, targetColor)) {
      return clicks;
    }

    // Probamos hacer click en cada celda.
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Y probamos cada color disponible.
        for (const color of colors) {
          if (currentGrid[row][col] === color) continue;
          // Desde donde estemos pintamos la grilla como sea posible
          const nextGrid = paintRegion(currentGrid, row, col, color);
          // Creamos una key para checkear
          const key = serialize(nextGrid);

          if (visited.has(key)) continue;
          // Si es una nueva key, la agregamos y aumentamos la cola con otro resultado
          visited.add(key);
          queue.push([nextGrid, clicks + 1]);
        }
      }
    }
  }
}
