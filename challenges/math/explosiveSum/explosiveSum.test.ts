import { expect, test } from '@jest/globals';
import { explosiveSum } from './explosiveSum';

test('Given a 4, this should return 5 ways.', () => {
  expect(explosiveSum(4)).toBe(5);
});

test('Given a 10, this should return 42 ways.', () => {
  expect(explosiveSum(10)).toBe(42);
});
