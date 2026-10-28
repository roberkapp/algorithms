import { expect, test } from '@jest/globals';
import { dive } from './hiddenTreasure';

test('Given a 2D array: [[ "-", "X"], [ "-", "X"], [ "-", "O"]] and the coordinates: [2, 1] should return "Recovered"', () => {
  expect(
    dive(
      [
        ['-', 'X'],
        ['-', 'X'],
        ['-', 'O'],
      ],
      [2, 1],
    ),
  ).toEqual('Recovered');
});

test('Given a 2D array: [[ "-", "X"], [ "-", "X"], [ "-", "O"]] and the coordinates: [2, 0] should return "Empty"', () => {
  expect(
    dive(
      [
        ['-', 'X'],
        ['-', 'X'],
        ['-', 'O'],
      ],
      [2, 0],
    ),
  ).toEqual('Empty');
});

test('Given a 2D array: [[ "-", "X"], [ "-", "O"], [ "-", "O"]] and the coordinates: [1, 1] should return "Found"', () => {
  expect(
    dive(
      [
        ['-', 'X'],
        ['-', 'O'],
        ['-', 'O'],
      ],
      [1, 1],
    ),
  ).toEqual('Found');
});
