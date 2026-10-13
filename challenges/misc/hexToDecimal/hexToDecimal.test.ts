import { expect, test } from '@jest/globals';
import { hexToDecimal } from './hexToDecimal';

test('Given a hex code: "A" should return 10', () => {
  expect(hexToDecimal('A')).toEqual(10);
});

test('Given a hex code: "2E" should return 46', () => {
  expect(hexToDecimal('2E')).toEqual(46);
});

test('Given a hex code: "FF" should return 255', () => {
  expect(hexToDecimal('FF')).toEqual(255);
});
