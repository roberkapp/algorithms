import { shiftMatrix } from './matrixShift';
import { test, expect } from '@jest/globals';

test('Given a matrix with [[1, 2, 3], [4, 5, 6]] and a shift of 1, should return [[6, 1, 2], [3, 4, 5]]', () => {
  expect(
    shiftMatrix(
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      1
    )
  ).toEqual([
    [6, 1, 2],
    [3, 4, 5],
  ]);
});
