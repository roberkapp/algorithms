import { expect, test } from '@jest/globals';
import { infected } from './infected';

test('Given 3 days should return 6 infected computers.', () => {
  expect(infected(3)).toBe(6);
});

test('Given 25 days should return 5217638 computers.', () => {
  expect(infected(25)).toBe(5217638);
});
