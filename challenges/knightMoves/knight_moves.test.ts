import { knightMoves } from './knight_moves';
import { test, expect } from '@jest/globals';

test('given A1 should return 2 moves', () => {
  expect(knightMoves('A1')).toBe(2);
});

test('given D4 should return 8 moves', () => {
  expect(knightMoves('D4')).toBe(8);
});
