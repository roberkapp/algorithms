import { expect, test } from '@jest/globals';
import { isValidNumber } from './isValidNumber';

test('Given a string: "10101" and a base: 2 should return true', () => {
  expect(isValidNumber('10101', 2)).toBeTruthy();
});

test('Given a string: "ABC" and a base: 10 should return false', () => {
  expect(isValidNumber('ABC', 10)).toBeFalsy();
});

test('Given a string: "ABC" and a base: 16 should return true', () => {
  expect(isValidNumber('ABC', 16)).toBeTruthy();
});

test('Given a string: "5G3F8F" and a base: 16 should return false', () => {
  expect(isValidNumber('5G3F8F', 16)).toBeFalsy();
});

test('Given a string: "Z" and a base: 36 should return true', () => {
  expect(isValidNumber('Z', 36)).toBeTruthy();
});
