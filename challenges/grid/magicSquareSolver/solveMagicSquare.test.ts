import { solveMagicSquare } from './solveMagicSquare';
import { test, expect } from '@jest/globals';

test('Given a grid: [[2, 7, 6], [9, 0, 1], [4, 3, 8]] the missing number should be 5', () => {
  expect(
    solveMagicSquare([
      [2, 7, 6],
      [9, 0, 1],
      [4, 3, 8],
    ])
  ).toBe(5);
});

test('Given a grid: [[12, 17, 16], [19, 0, 10], [14, 13, 18]] the missing number should be impossible', () => {
  expect(
    solveMagicSquare([
      [12, 17, 16],
      [19, 0, 10],
      [14, 13, 18],
    ])
  ).toBe('impossible');
});
