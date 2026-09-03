import { expect, test } from '@jest/globals';
import { findLandingSpot } from './landingSpot';

test('A matrix with [[1, 0], [2, 0]] should return [0, 1]', () => {
  expect(
    findLandingSpot([
      [1, 0],
      [2, 0],
    ]),
  ).toEqual([0, 1]);
});

test('A matrix with [[9, 0, 3], [7, 0, 4], [8, 0, 5]] should return [1, 1]', () => {
  expect(
    findLandingSpot([
      [9, 0, 3],
      [7, 0, 4],
      [8, 0, 5],
    ]),
  ).toEqual([1, 1]);
});
