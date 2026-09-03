import { isPrime } from './utils';

export function nthPrime(n: number): number {
  let counter = 0;

  for (let i = 2; i < Infinity; i++) {
    if (isPrime(i)) counter++;
    if (counter === n) return i;
  }
  return 0;
}
