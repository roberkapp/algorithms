import { expect, test } from '@jest/globals';
import { matrixBuilder } from './matrixBuilder';

test('Given 2 rows and 3 columns should return: [[0, 0, 0],[0, 0, 0]]', () => {
  expect(matrixBuilder(2, 3)).toEqual([
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

test('Given 4 rows and 3 columns should return: [[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]]', () => {
  expect(matrixBuilder(4, 3)).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

test('Given 9 rows and 1 columns should return: [[0],[0],[0],[0],[0],[0],[0],[0],[0]]', () => {
  expect(matrixBuilder(9, 1)).toEqual([[0], [0], [0], [0], [0], [0], [0], [0], [0]]);
});
