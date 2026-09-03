import { expect, test } from '@jest/globals';
import { exactChange } from './exactChange';

test('returns how many ways of retrieving change are', () => {
  expect(exactChange(39)).toBe(24);
});
