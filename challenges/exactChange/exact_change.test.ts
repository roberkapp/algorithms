import { test, expect } from '@jest/globals';
import { exactChange } from './exact_change';

test('returns how many ways of retrieving change are', () => {
  expect(exactChange(39)).toBe(24);
});
