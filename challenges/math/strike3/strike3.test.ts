import { expect, test } from '@jest/globals';
import { squaresWithThree } from './strike3';

test('Given a integer 1 should return 0 squares with 3 in it', () => {
  expect(squaresWithThree(1)).toBe(0);
});

test('Given a integer 10 should return 1 square with 3 in it', () => {
  expect(squaresWithThree(10)).toBe(1);
});

test('Given a integer 1000 should return 326 squares with 3 in it', () => {
  expect(squaresWithThree(1000)).toBe(326);
});
