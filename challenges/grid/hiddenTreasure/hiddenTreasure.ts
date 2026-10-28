import type { DiveResponse } from './models';

export function dive(map: string[][], coordinates: [number, number]): DiveResponse {
  const [row, col] = coordinates;
  const position = map[row][col];

  if (position === '-') return 'Empty';
  if (position === 'X') return 'Found';

  map[row][col] = 'X';

  const hasMoreParts = map.some((row) => row.includes('O'));

  return hasMoreParts ? 'Found' : 'Recovered';
}
