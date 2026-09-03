import { test, expect } from '@jest/globals';
import { isValidNonogram } from './nonogram_validator';

test('Given a clue of [3, 2] and an array of cells: [1, 1, 1, 0, 1, 1]', () => {
  expect(isValidNonogram([3, 2], [1, 1, 1, 0, 1, 1])).toBeTruthy();
});

test('Given a clue of [3, 2] and an array of cells: [0, 1, 1, 1, 1, 1]', () => {
  expect(isValidNonogram([3, 2], [0, 1, 1, 1, 1, 1])).toBeFalsy();
});

test('Given a clue of [1, 1, 1, 1] and an array of cells: [1, 0, 1, 0, 1, 0, 1, 0, 1]', () => {
  expect(
    isValidNonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1])
  ).toBeFalsy();
});
