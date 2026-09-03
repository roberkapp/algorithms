import { test, expect } from '@jest/globals';
import { parseRomanNumeral } from './parse_roman_numeral';

test('Given a roman number "III" should return 3', () => {
  expect(parseRomanNumeral('III')).toBe(3);
});

test('Given a roman number: "DIV" should return 504', () => {
  expect(parseRomanNumeral('DIV')).toBe(504);
});
