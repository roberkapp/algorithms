import { expect, test } from '@jest/globals';
import { durationFormat } from './durationFormat';

test('Given 500 seconds should return 8:20', () => {
  expect(durationFormat(500)).toEqual('8:20');
});

test('Given 4000 seconds should return 1:06:40', () => {
  expect(durationFormat(4000)).toEqual('1:06:40');
});
