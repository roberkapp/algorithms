import { expect, test } from '@jest/globals';
import { getNextLocation } from './findBallDirection';

test('Given a matrix: [[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]] should return [2,3]', () => {
  expect(
    getNextLocation([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 1, 2, 0],
      [0, 0, 0, 0],
    ]),
  ).toEqual([2, 3]);
});

test('Given a matrix: [[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]] should return [1,2]', () => {
  expect(
    getNextLocation([
      [0, 2, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]),
  ).toEqual([1, 2]);
});

test('Given a matrix: [[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]] should return [1,1]', () => {
  expect(
    getNextLocation([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [2, 0, 0, 0],
      [0, 1, 0, 0],
    ]),
  ).toEqual([1, 1]);
});

test('Given a matrix: [[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]] should return [2,2]', () => {
  expect(
    getNextLocation([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 2],
    ]),
  ).toEqual([2, 2]);
});
