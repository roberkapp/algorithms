import { expect, test } from '@jest/globals';
import { bucketFill } from './bucketFill';

test('replaces the first G for B', () => {
  expect(
    bucketFill(
      [
        ['R', 'G'],
        ['R', 'G'],
      ],
      [0, 1],
      'B'
    )
  ).toEqual([
    ['R', 'B'],
    ['R', 'B'],
  ]);
});
