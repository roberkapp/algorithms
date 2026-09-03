import { expect, test } from '@jest/globals';
import { bucketFill } from './bucket_fill';

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
