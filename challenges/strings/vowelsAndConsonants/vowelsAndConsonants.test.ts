import { expect, test } from '@jest/globals';
import { countVowelsAndConsonants } from './vowelsAndConsonants';

test('Given the string: "Hello_World!" should return and array of 3 vowels and 7 consonants', () => {
  expect(countVowelsAndConsonants('Hello_World!')).toEqual([3, 7]);
});

test('Given the string: "JavaScript" should return and array of 3 vowels and 7 consonants', () => {
  expect(countVowelsAndConsonants('JavaScript')).toEqual([3, 7]);
});

test('Given the string: "freeCodeCamp" should return and array of 5 vowels and 7 consonants', () => {
  expect(countVowelsAndConsonants('freeCodeCamp')).toEqual([5, 7]);
});
