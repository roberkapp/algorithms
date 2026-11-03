import { expect, test } from '@jest/globals';
import { wordCount } from './wordCount';

test('Given a sentences: "Hello world" should return 2 words.', () => {
  expect(wordCount('Hello world')).toBe(2);
});

test('Given a sentences: "The quick brown fox jumps over the lazy dog." should return 9 words.', () => {
  expect(wordCount('The quick brown fox jumps over the lazy dog.')).toBe(9);
});
