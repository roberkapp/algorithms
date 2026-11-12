import { expect, test } from '@jest/globals';
import { RomanNumeralsHelper } from './romanNumeralsHelper';

test('Given a roman number: "MMMDCLXXXI" should return 3681', () => {
  expect(RomanNumeralsHelper.fromRoman('MMMDCLXXXI')).toEqual(3681);
});

test('Given a roman number: "IV" should return 4', () => {
  expect(RomanNumeralsHelper.fromRoman('IV')).toEqual(4);
});

test('Given a roman number: "CMXXVII" should return 927', () => {
  expect(RomanNumeralsHelper.fromRoman('CMXXVII')).toEqual(927);
});

test('Given the number: 3681 should return "MMMDCLXXXI"', () => {
  expect(RomanNumeralsHelper.toRoman(3681)).toEqual('MMMDCLXXXI');
});

test('Given the number: 1256 should return "MCCLVI"', () => {
  expect(RomanNumeralsHelper.toRoman(1256)).toEqual('MCCLVI');
});

test('Given the number: 94 should return "XCIV"', () => {
  expect(RomanNumeralsHelper.toRoman(94)).toEqual('XCIV');
});
