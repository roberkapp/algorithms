import { expect, test } from '@jest/globals';
import { calculateHandicap } from './calculateHandicap';

test('Given an array of scores: [72,72,72] and an array of pars: [72,72,72] should return 0.0', () => {
  expect(calculateHandicap([72, 72, 72], [72, 72, 72])).toBe('0.0');
});

test('Given an array of scores: [42, 45, 46, 44] and an array of pars: [36, 36, 36, 36] should return 8.3', () => {
  expect(calculateHandicap([42, 45, 46, 44], [36, 36, 36, 36])).toBe('8.3');
});
