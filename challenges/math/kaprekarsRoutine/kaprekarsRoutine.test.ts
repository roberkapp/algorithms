import { expect, test } from '@jest/globals';
import { kaprekar } from './kaprekarsRoutine';

test('Given the number 1234 should return 3 iterations.', () => {
  expect(kaprekar(1234)).toEqual(3);
});

test('Given the number 2025 should return 6 iterations.', () => {
  expect(kaprekar(2025)).toEqual(6);
});

test('Given the number 3164 should return 7 iterations.', () => {
  expect(kaprekar(3164)).toEqual(7);
});

test('Given the number 8082 should return 2 iterations.', () => {
  expect(kaprekar(8082)).toEqual(2);
});
