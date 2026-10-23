import { expect, test } from '@jest/globals';
import { bucketFill3 } from './bucketFill3';

test('Given a grid of colors: [["B", "B"], ["B", "B"]] and a target color: "R" should return 1', () => {
  expect(
    bucketFill3(
      [
        ['B', 'B'],
        ['B', 'B'],
      ],
      'R',
    ),
  ).toBe(1);
});

test('Given a grid of colors: [["G", "Y", "C", "C"], ["Y", "Y", "Y", "B"], ["C", "Y", "B", "B"], ["C", "B", "B", "C"]] and a target color: "R" should return 4', () => {
  expect(
    bucketFill3(
      [
        ['G', 'Y', 'C', 'C'],
        ['Y', 'Y', 'Y', 'B'],
        ['C', 'Y', 'B', 'B'],
        ['C', 'B', 'B', 'C'],
      ],
      'R',
    ),
  ).toBe(4);
});

test('Given a grid of colors: [["G", "G", "O", "O"], ["G", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["G", "G", "G", "G"]] and a target color: "P" should return 5', () => {
  expect(
    bucketFill3(
      [
        ['G', 'G', 'O', 'O'],
        ['G', 'Y', 'B', 'Y'],
        ['B', 'Y', 'B', 'Y'],
        ['B', 'Y', 'B', 'Y'],
        ['G', 'G', 'G', 'G'],
      ],
      'P',
    ),
  ).toBe(5);
});
