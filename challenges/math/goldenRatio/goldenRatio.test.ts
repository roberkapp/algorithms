import { expect, test } from '@jest/globals';
import { isGoldenRatio } from './goldenRatio';

test('checks for 21 and 34 to be true', () => {
  expect(isGoldenRatio(21, 34)).toBeTruthy();
});

test('checks for 15 and 20 to be false', () => {
  expect(isGoldenRatio(15, 20)).toBeFalsy();
});
