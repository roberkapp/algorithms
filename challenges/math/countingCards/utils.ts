export const getFactorial = (n: number): number => {
  let factorial = 1;

  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
};
