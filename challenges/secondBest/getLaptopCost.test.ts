import { expect, test } from '@jest/globals';
import { getLaptopCost } from './getLaptopCost';

test('Given laptop prices: [1500,2000,1800,1400] and a budget of: $1900 should return 1800', () => {
  expect(getLaptopCost([1500, 2000, 1800, 1400], 1900)).toBe(1800);
});

test('Given laptop prices: [2099,1599,1899,1499] and a budget of: $1000 should return 0', () => {
  expect(getLaptopCost([2099, 1599, 1899, 1499], 1000)).toBe(0);
});

test('Given laptop prices: [1200,1500,1600,1800,1400,2000] and a budget of: $1450 should return 1400', () => {
  expect(getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450)).toBe(1400);
});
