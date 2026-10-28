import { expect, test } from '@jest/globals';
import { sequence } from './integerSequence';

test('Given an integer: 5 should return a sequence: "12345"', () => {
  expect(sequence(5)).toEqual('12345');
});

test('Given an integer: 27 should return a sequence: "123456789101112131415161718192021222324252627"', () => {
  expect(sequence(27)).toEqual('123456789101112131415161718192021222324252627');
});
