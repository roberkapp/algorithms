import { expect, test } from '@jest/globals';
import { makeLeet } from './1337Speak';

test('Given a string "cool" should return a leet: "c001".', () => {
  expect(makeLeet('cool')).toEqual('c001');
});

test('Given a string "satellite" should return a leet: "547311173".', () => {
  expect(makeLeet('satellite')).toEqual('547311173');
});
