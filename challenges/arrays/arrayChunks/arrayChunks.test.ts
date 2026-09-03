import { expect, test } from '@jest/globals';
import { chunkArrays } from './arrayChunks';

test('splits an array in to 2 sub-arrays', () => {
  expect(chunkArrays([1, 2, 3, 4, 5, 6], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
  ]);
});
