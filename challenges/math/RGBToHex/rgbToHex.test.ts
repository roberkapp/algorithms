import { test, expect } from '@jest/globals';
import { rgbToHex } from './rgbToHex';

test('Given an rgb code: 255, 255, 255 should return "#ffffff"', () => {
  expect(rgbToHex('rgb(255, 255, 255)')).toBe('#ffffff');
});

test('Given an rgb code: 1, 11, 111 should return "#010b6f"', () => {
  expect(rgbToHex('rgb(1, 11, 111)')).toBe('#010b6f');
});

test('Given an rgb code: 173, 216, 230 should return "#add8e6"', () => {
  expect(rgbToHex('rgb(173, 216, 230)')).toBe('#add8e6');
});
