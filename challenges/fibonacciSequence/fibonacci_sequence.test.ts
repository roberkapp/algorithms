import { fibonacciSequence } from './fibonacci_sequence';
import { test, expect } from '@jest/globals';

test('Given an start sequence: [0, 1] and a length of: 20, should return a full sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181] ', () => {
  expect(fibonacciSequence([0, 1], 20)).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181,
  ]);
});

test('Given an start sequence: [21, 32] and a length of: 1, should return a full sequence: [21] ', () => {
  expect(fibonacciSequence([21, 32], 1)).toEqual([21]);
});

test('Given an start sequence: [0, 1] and a length of: 0, should return a full sequence: [] ', () => {
  expect(fibonacciSequence([0, 1], 0)).toEqual([]);
});
