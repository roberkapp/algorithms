import { getSpokenTime } from './spoken_time';
import { test, expect } from '@jest/globals';

test("Given an hour angle of 90° and a minutes angle of 0° should return 3 o'clock ", () => {
  expect(getSpokenTime(90, 0)).toBe("3 o'clock");
});

test('Given an hour angle of 160° and a minutes angle of 120° should return 20 minutes past 5', () => {
  expect(getSpokenTime(160, 120)).toBe('20 minutes past 5');
});

test('Given an hour angle of 255° and a minutes angle of 180° should return half past 8', () => {
  expect(getSpokenTime(255, 180)).toBe('half past 8');
});

test('Given an hour angle of 67.5° and a minutes angle of 92° should return quarter past 2', () => {
  expect(getSpokenTime(67.5, 92)).toBe('quarter past 2');
});
