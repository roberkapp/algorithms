import { isBalanced } from './isBalanced';
import { test, expect } from '@jest/globals';

test('Given the string "racecar" the answer should be true', () => {
  expect(isBalanced('racecar')).toBeTruthy();
});

test('Given the string "Kitty Ipsum" the answer should be true', () => {
  expect(isBalanced('Kitty Ipsum')).toBeFalsy();
});
