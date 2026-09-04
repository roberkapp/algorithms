import { expect, test } from '@jest/globals';
import { rotate } from './rotate';

test('Given a matrix with just [[1]] should return the same matrix', () => {
  expect(rotate([[1]])).toEqual([[1]]);
});

test('Given a matrix: [[1,2],[3,4]] should rotate to: [[3,1],[4,2]]', () => {
  expect(
    rotate([
      [1, 2],
      [3, 4],
    ]),
  ).toEqual([
    [3, 1],
    [4, 2],
  ]);
});

test('Given a matrix: [[1,2,3],[4,5,6][7,8,9]] should rotate to: [[7,4,1],[8,5,2][9,6,3]]', () => {
  expect(
    rotate([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  ).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]);
});
