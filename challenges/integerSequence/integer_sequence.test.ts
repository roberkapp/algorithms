import { integerSequence } from './integer_sequence';
import { test, expect } from '@jest/globals';

test('Given an integer: 5 shoul return a string "12345"', () => {
  expect(integerSequence(5)).toEqual('12345');
});
