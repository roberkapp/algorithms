export function integerSequence(n: number): string {
  return Array.from({ length: n }, (_, i) => i + 1).join('');
}
