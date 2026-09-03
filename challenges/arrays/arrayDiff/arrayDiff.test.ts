import { test, expect } from '@jest/globals';
import { arrayDiff } from './arrayDiff';

test('Given a first array with: ["apple","banana"] and a second array with: ["apple", "banana", "cherry"] should return ["cherry"]', () => {
  expect(arrayDiff(['apple', 'banana'], ['apple', 'banana', 'cherry'])).toEqual(
    ['cherry']
  );
});

test('Given a first array with: ["one", "two", "three", "four", "six"] and a second array with: ["one", "three", "eight"] should return ["eight", "four", "six", "two"]', () => {
  expect(
    arrayDiff(['one', 'two', 'three', 'four', 'six'], ['one', 'three', 'eight'])
  ).toEqual(['eight', 'four', 'six', 'two']);
});
