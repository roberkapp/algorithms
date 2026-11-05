import { expect, test } from '@jest/globals';
import { ticTacToe } from './ticTacToe';

test('Given a board: [["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]] should return X wins.', () => {
  expect(
    ticTacToe([
      ['X', 'X', 'X'],
      ['O', 'O', 'X'],
      ['O', 'X', 'O'],
    ]),
  ).toEqual('X wins');
});

test('Given a board: [["X", "X", "O"], ["X", "O", "O"], ["O", "O", "X"]] should return O wins.', () => {
  expect(
    ticTacToe([
      ['X', 'X', 'O'],
      ['X', 'O', 'O'],
      ['O', 'O', 'X'],
    ]),
  ).toEqual('O wins');
});

test('Given a board: [["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]] should return Draw.', () => {
  expect(
    ticTacToe([
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['O', 'X', 'O'],
    ]),
  ).toEqual('Draw');
});
