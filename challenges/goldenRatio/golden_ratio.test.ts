import { isGoldenRatio } from './golden_ratio';
import { test, expect } from '@jest/globals';

test('checks for 21 and 34 to be true', () => {
  expect(isGoldenRatio(21, 34)).toBeTruthy();
});

test('checks for 15 and 20 to be false', () => {
  expect(isGoldenRatio(15, 20)).toBeFalsy();
});
