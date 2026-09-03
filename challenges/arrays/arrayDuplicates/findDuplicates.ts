export function findDuplicates(arr: number[]): number[] {
  const duplicates = new Set<number>();
  const uniques = new Set<number>();

  for (const num of arr) {
    if (uniques.has(num)) duplicates.add(num);
    uniques.add(num);
  }

  return Array.from(duplicates).sort((a, b) => a - b);
}
