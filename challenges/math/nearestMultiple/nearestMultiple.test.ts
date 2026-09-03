import { expect, test } from '@jest/globals';
import { nearestMultiple } from './nearestMultiple';

test('Given a integer 5 and a multiple of 3 should return 6', () => {
  expect(nearestMultiple(5, 3)).toBe(6);
});

test('Given a integer 17 and a multiple of 4 should return 16', () => {
  expect(nearestMultiple(17, 4)).toBe(16);
});
