import { gameOfLife } from './gameOfLife';
import { test, expect } from '@jest/globals';

test('giving a matrix returns a new one following the game of life rules', () => {
  expect(
    gameOfLife([
      [1, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 1, 1],
      [0, 0, 1, 0],
    ])
  ).toEqual([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 1, 1, 1],
  ]);
});
