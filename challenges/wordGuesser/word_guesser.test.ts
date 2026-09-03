import { test, expect } from '@jest/globals';
import { wordGuesser } from './word_guesser';

test('Given a secret word: "APPLE" and a guess: "POPPA" should return 10201', () => {
  expect(wordGuesser('APPLE', 'POPPA')).toBe('10201');
});

test('Given a secret word: "REACT" and a guess: "TRACE" should return 11221', () => {
  expect(wordGuesser('REACT', 'TRACE')).toBe('11221');
});

test('Given a secret word: "DEBUGS" and a guess: "PYTHON" should return 000000', () => {
  expect(wordGuesser('DEBUGS', 'PYTHON')).toBe('000000');
});

test('Given a secret word: "JAVASCRIPT" and a guess: "TYPESCRIPT" should return 0000222222', () => {
  expect(wordGuesser('JAVASCRIPT', 'TYPESCRIPT')).toBe('0000222222');
});
