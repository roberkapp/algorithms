import { directions } from './const';
import type { Grid } from './models';

// Representamos cada grilla como un string.
export const serialize = (grid: Grid): string => grid.flat().join('');

// Comprueba si toda la grilla tiene el color objetivo.
export const isComplete = (grid: Grid, targetColor: string): boolean =>
  grid.every((row) => row.every((color) => color === targetColor));

// Pinta una región conectada, sin modificar la grilla original.
export function paintRegion(grid: Grid, row: number, col: number, newColor: string): Grid {
  const copy = grid.map((row) => [...row]);
  const originalColor = copy[row][col];

  function fill(r: number, c: number): void {
    copy[r][c] = newColor;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (copy[nr]?.[nc] === originalColor) {
        fill(nr, nc);
      }
    }
  }

  fill(row, col);

  return copy;
}
