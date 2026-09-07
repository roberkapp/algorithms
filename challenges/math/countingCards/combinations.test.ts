import { expect, test } from '@jest/globals';
import { combinations } from './combinations';

test('When picked 52 cards should return 1 combination', () => {
  expect(combinations(52)).toBe(1);
});

test('When picked 1 card at a time should return 52 combinations', () => {
  expect(combinations(1)).toBe(52);
});

test('When picked 2 cards at a time should return 1326 combinations', () => {
  expect(combinations(2)).toBe(1326);
});

test('When picked 5 cards at a time should return 2598960 combinations', () => {
  expect(combinations(5)).toBe(2598960);
});
