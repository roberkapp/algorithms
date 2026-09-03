import { getSpokenDuration } from './getSpokenDuration';
import { test, expect } from '@jest/globals';

test('Given 3723 seconds should return "1 hour, 2 minutes and 3 seconds"', () => {
  expect(getSpokenDuration(3723)).toEqual('1 hour, 2 minutes and 3 seconds');
});

test('Given 14455 seconds should return "4 hours and 55 seconds"', () => {
  expect(getSpokenDuration(14455)).toEqual('4 hours and 55 seconds');
});

test('Given 1 second should return "1 second"', () => {
  expect(getSpokenDuration(1)).toEqual('1 second');
});
