import { fixPrankNumber } from './prankNumber';
import { test, expect } from '@jest/globals';

test('Given a secuence : [2, 4, 7, 8, 10] should return [2, 4, 6, 8, 10]', () => {
  expect(fixPrankNumber([2, 4, 7, 8, 10])).toEqual([2, 4, 6, 8, 10]);
});

test('Given a secuence : [4, 1, -2, -5, -8, -5] should return [4, 1, -2, -5, -8, -11]', () => {
  expect(fixPrankNumber([4, 1, -2, -5, -8, -5])).toEqual([
    4, 1, -2, -5, -8, -11,
  ]);
});

test('Given a secuence : [400, 425, 400, 375, 350, 325, 300] should return [450, 425, 400, 375, 350, 325, 300]', () => {
  expect(fixPrankNumber([400, 425, 400, 375, 350, 325, 300])).toEqual([
    450, 425, 400, 375, 350, 325, 300,
  ]);
});
