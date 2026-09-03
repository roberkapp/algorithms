// @CodeScene(disable:"Bumpy Road Ahead")
export function isValidNonogram(clue: number[], cells: number[]): boolean {
  let consecutive = 0,
    pointer = 0;

  for (let i = 0; i < cells.length; i++) {
    const curr = cells[i];

    if (curr !== 0) {
      consecutive++;
      continue;
    }

    if (consecutive > 0) {
      if (consecutive !== clue[pointer]) return false;
      pointer++;
      consecutive = 0;
    }
  }

  // Para checkear al final del bucle cuantos consecutivos quedaron si los hay.
  if (consecutive > 0) {
    if (consecutive !== clue[pointer]) return false;
    pointer++;
  }
  return pointer === clue.length;
}
