import { expect, test } from '@jest/globals';
import { launchFuel } from './launchFuel';

test('Given a payload of 50kg should return a total fuel of 12.4', () => {
  expect(launchFuel(50)).toBe('12.4');
});

test('Given a payload of 243kg should return a total fuel of 60.7', () => {
  expect(launchFuel(243)).toBe('60.7');
});

test('Given a payload of 6214kg should return a total fuel of 1553.4', () => {
  expect(launchFuel(6214)).toBe('1553.4');
});
