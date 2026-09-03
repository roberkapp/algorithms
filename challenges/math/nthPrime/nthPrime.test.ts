import { expect, test } from '@jest/globals';
import { nthPrime } from './nthPrime';

test('Given the 5th prime number the answer should be 11', () => {
  expect(nthPrime(5)).toBe(11);
});

test('Given the 16th prime number the answer should be 53', () => {
  expect(nthPrime(16)).toBe(53);
});

test('Given the 1000th prime number the answer should be 7919', () => {
  expect(nthPrime(1000)).toBe(7919);
});
