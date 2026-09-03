export function fixPrankNumber(arr: number[]): number[] {
  const patterns = new Set<number>();
  // Guardo todas los patrones
  for (let i = 0; i < arr.length - 1; i++) {
    patterns.add(arr[i + 1] - arr[i]);
  }

  // pruebo desde 0 armando un array con cada patron
  for (const pattern of patterns) {
    for (let start = 0; start - arr.length; start++) {
      // creo la base para saber el principio del array.
      const possible = arr[start] - pattern * start;
      // construyo sobre la base si el comienzo es 2 + (ej patron: 2 * 0 = 0); -> 2 + 0, 2 + 2, 2+ 4, 2+ 6, étc;
      const expected = arr.map((_, i) => possible + pattern * i);
      // filtro las diferencias
      const errors = expected.filter((num, i) => num !== arr[i]).length;
      // cuando encuentre la formación con una sola diff entonces se que esa es la solución.
      if (errors === 1) return expected;
    }
  }
  return arr;
}
