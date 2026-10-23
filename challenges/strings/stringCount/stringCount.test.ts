import { expect, test } from '@jest/globals';
import { stringCount } from './stringCount';

test('Given a text: "abcdefg" and a pattern: "def" should return 1', () => {
  expect(stringCount('abcdefg', 'def')).toBe(1);
});

test('Given a text: "hello" and a pattern: "world" should return 0', () => {
  expect(stringCount('hello', 'world')).toBe(0);
});

test('Given a text: "she sells seashells by the seashore" and a pattern: "sh" should return 3', () => {
  expect(stringCount('she sells seashells by the seashore', 'sh')).toBe(3);
});
