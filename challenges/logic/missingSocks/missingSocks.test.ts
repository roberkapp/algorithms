import { expect, test } from '@jest/globals';
import { sockPairs } from './missingSocks';

test('Given 2 pairs of socks and 5 wash cycles should return: 1', () => {
  expect(sockPairs(2, 5)).toBe(1);
});

test('Given 1 pairs of socks and 2 wash cycles should return: 0', () => {
  expect(sockPairs(1, 2)).toBe(0);
});

test('Given 5 pairs of socks and 11 wash cycles should return: 4', () => {
  expect(sockPairs(5, 11)).toBe(4);
});
