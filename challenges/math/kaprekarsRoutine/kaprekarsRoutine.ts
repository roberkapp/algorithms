import { sorter } from './utils';

export function kaprekar(n: number): number {
  const kaprekarNumber = 6174;
  const cycles = (n: number): number => {
    const [smaller, bigger] = [sorter(n, 'asc'), sorter(n, 'desc')];
    const diff = Number(bigger) - Number(smaller);

    if (diff === kaprekarNumber) return 1;
    return cycles(diff) + 1;
  };
  return cycles(n);
}
