import { expect, test } from '@jest/globals';
import { integerSequence } from './integerSequence';

test('Given an integer: 5 shoul return a string "12345"', () => {
  expect(integerSequence(5)).toEqual('12345');
});
