import { findWord } from './word_search';
import { test, expect } from '@jest/globals';

test('Given this matrix: [["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]] and the word "cat" should return the coordinates: [[0, 1],[2, 1]]', () => {
  expect(
    findWord(
      [
        ['a', 'c', 't'],
        ['t', 'a', 't'],
        ['c', 't', 'c'],
      ],
      'cat'
    )
  ).toEqual([
    [0, 1],
    [2, 1],
  ]);
});

test('Given this matrix: [["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]] and the word "cat" should return the coordinates: [[3, 3],[0, 3]]', () => {
  expect(
    findWord(
      [
        ['h', 'i', 's', 'h'],
        ['i', 's', 'f', 's'],
        ['f', 's', 'i', 'i'],
        ['s', 'h', 'i', 'f'],
      ],
      'fish'
    )
  ).toEqual([
    [3, 3],
    [0, 3],
  ]);
});
