import { test, expect } from '@jest/globals';
import { tribonacciSequence } from './tribonacci_sequence';

test('Given a start sequence of: [0,0,1] and a length of 20 should return [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513]', () => {
  expect(tribonacciSequence([0, 0, 1], 20)).toEqual([
    0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768,
    10609, 19513,
  ]);
});

test('Given a start sequence of: [0,0,1] and a length of 0 should return []', () => {
  expect(tribonacciSequence([0, 0, 1], 0)).toEqual([]);
});

test('Given a start sequence of: [21,32,43] and a length of 1 should return [21]', () => {
  expect(tribonacciSequence([21, 32, 43], 1)).toEqual([21]);
});
