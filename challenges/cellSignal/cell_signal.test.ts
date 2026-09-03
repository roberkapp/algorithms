import { expect, test } from '@jest/globals';
import { findSignal } from './cell_signal';

test('given a grid with 3 towers, returns the cell position', () => {
  expect(
    findSignal([
      [0, 2, 0],
      [1, 0, 0],
      [0, 0, 1],
    ])
  ).toEqual([2, 1]);
});
