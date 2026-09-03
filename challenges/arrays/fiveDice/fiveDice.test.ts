import { expect, test } from '@jest/globals';
import { fiveDice } from './fiveDice';

test('returs the value of a dice hand', () => {
  expect(fiveDice([5, 5, 5, 6, 5])).toBe('four of a kind');
});
