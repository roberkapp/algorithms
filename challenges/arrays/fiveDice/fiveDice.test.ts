import { fiveDice } from './fiveDice';
import { test, expect } from '@jest/globals';

test('returs the value of a dice hand', () => {
  expect(fiveDice([5, 5, 5, 6, 5])).toBe('four of a kind');
});
