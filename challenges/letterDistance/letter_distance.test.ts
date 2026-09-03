import { expect, test } from '@jest/globals';
import { letterDistance } from './letter_distance';

test('given abc and xyz should return 9', () => {
  expect(letterDistance('abc', 'xyz')).toBe(9);
});
