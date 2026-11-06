export function squaresWithThree(n: number): number {
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    if ((i ** 2).toString().includes('3')) counter++;
  }
  return counter;
}
