import { expect, test } from '@jest/globals';
import { findMissingNumbers } from './missingNumbers';

test('Given an array of numbers: [1, 3, 5] should return: [2, 4]', () => {
  expect(findMissingNumbers([1, 3, 5])).toEqual([2, 4]);
});

test('Given an array of numbers: [1, 10] should return: [2, 3, 4, 5, 6, 7, 8, 9]', () => {
  expect(findMissingNumbers([1, 10])).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
});

test('Given an array of numbers: [1, 2, 3, 4, 5] should return: []', () => {
  expect(findMissingNumbers([1, 2, 3, 4, 5])).toEqual([]);
});
