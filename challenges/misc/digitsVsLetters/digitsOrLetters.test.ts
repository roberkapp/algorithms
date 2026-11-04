import { expect, test } from '@jest/globals';
import { digitsOrLetters } from './digitsOrLetters';

test('Given a string: "abc123" should return "tie"', () => {
  expect(digitsOrLetters('abc123')).toEqual('tie');
});

test('Given a string: "a1b2c3d" should return "letters"', () => {
  expect(digitsOrLetters('a1b2c3d')).toEqual('letters');
});

test('Given a string: "1a2b3c4" should return "digits"', () => {
  expect(digitsOrLetters('1a2b3c4')).toEqual('digits');
});
