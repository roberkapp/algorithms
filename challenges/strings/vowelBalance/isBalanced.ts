import { getHalfs, vowelCounter } from './utils';

export function isBalanced(s: string): boolean {
  const [firstHalf, secondHalf] = getHalfs(s);
  const countFirstHalf = vowelCounter(firstHalf);
  const countSecondHalf = vowelCounter(secondHalf);
  return countFirstHalf === countSecondHalf;
}
