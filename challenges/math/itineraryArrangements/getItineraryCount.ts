export function getItineraryCount(stops: string[]): number {
  const n = stops.length;

  let factorial = 1;

  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }

  return factorial * (2 * n - 3);
}
