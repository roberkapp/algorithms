import { bucketFill2 } from './bucketFill2';
import { test, expect } from '@jest/globals';

test('Given a grid [["R", "R"], ["R", "R"]] and a target color equal to "G" should return 1 click', () => {
  expect(
    bucketFill2(
      [
        ['R', 'R'],
        ['R', 'R'],
      ],
      'G'
    )
  ).toBe(1);
});

test('Given a grid [["G", "G", "C", "C", "O"], ["B", "Y", "B", "Y", "O"], ["B", "J", "O", "J", "B"], ["G", "Y", "Y", "Y", "B"], ["G", "P", "P", "G", "G"]] and a target color equal to "Y" should return 12 clicks', () => {
  expect(
    bucketFill2(
      [
        ['G', 'G', 'C', 'C', 'O'],
        ['B', 'Y', 'B', 'Y', 'O'],
        ['B', 'J', 'O', 'J', 'B'],
        ['G', 'Y', 'Y', 'Y', 'B'],
        ['G', 'P', 'P', 'G', 'G'],
      ],
      'Y'
    )
  ).toBe(12);
});
