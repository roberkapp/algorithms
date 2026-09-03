export function isGoldenRatio(a: number, b: number): boolean {
  const goldenRatio = 1.618;
  const tolerance = 0.01;
  // el mayor divido el menor simplemente
  const ratio = Math.max(a, b) / Math.min(a, b);

  return Math.abs(goldenRatio - ratio) <= tolerance;
}
