import { expect, test } from '@jest/globals';
import { findDuplicates } from './findDuplicates';

test('Given an array of numbers: [1,2,3,4,5] should return []', () => {
  expect(findDuplicates([1, 2, 3, 4, 5])).toEqual([]);
});

test('Given an array of numbers: [1,2,3,4,1,2] should return [1,2]', () => {
  expect(findDuplicates([1, 2, 3, 4, 1, 2])).toEqual([1, 2]);
});

test('Given an array of numbers: [2,34,0,1,-6,23,5,3,2,5,67,-6,23,2,43,2,12,0,2,4,4] should return [-6,0,2,4,5,23]', () => {
  expect(
    findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]),
  ).toEqual([-6, 0, 2, 4, 5, 23]);
});
