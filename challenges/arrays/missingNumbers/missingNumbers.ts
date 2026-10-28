export function findMissingNumbers(arr: number[]): number[] {
  const copy = [...arr];
  const sorted = copy.sort((a, b) => a - b);
  const clean = new Set(sorted);

  const missing = [];

  for (let i = sorted[0]; i < sorted[sorted.length - 1]; i++) {
    if (!clean.has(i)) missing.push(i);
  }

  return missing;
}
