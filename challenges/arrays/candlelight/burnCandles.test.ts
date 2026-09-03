import { test, expect } from '@jest/globals';
import { burnCandles } from './burnCandles';

test('Given 7 candles and 2 leftovers to create a new one thisbshould return 13 candles', () => {
  expect(burnCandles(7, 2)).toBe(13);
});

test('Given 17 candles and 4 leftovers to create a new one thisbshould return 22 candles', () => {
  expect(burnCandles(17, 4)).toBe(22);
});

test('Given 2345 candles and 3 leftovers to create a new one thisbshould return 3517 candles', () => {
  expect(burnCandles(2345, 3)).toBe(3517);
});
