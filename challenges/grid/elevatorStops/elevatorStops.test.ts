import { elevatorStops } from './elevatorStops';
import { expect, test } from '@jest/globals';

test('returns the most efficient way to travel floors', () => {
  expect(elevatorStops(6, [2, 10, 8, 3, 1, 9])).toEqual([8, 9, 10, 3, 2, 1]);
});
