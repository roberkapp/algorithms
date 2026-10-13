import { expect, test } from '@jest/globals';
import { battleOfWords } from './battleOfWords';

test('Given for our team the sentence "hello world" and for the opponent team the sentence "hello word" should return "We win"', () => {
  expect(battleOfWords('hello world', 'hello word')).toEqual('We win');
});

test('Given for our team the sentence "lorem ipsum" and for the opponent team the sentence "kitty ipsum" should return "We lose"', () => {
  expect(battleOfWords('lorem ipsum', 'kitty ipsum')).toEqual('We lose');
});

test('Given for our team the sentence "hello world" and for the opponent team the sentence "world hello" should return "Draw"', () => {
  expect(battleOfWords('hello world', 'world hello')).toEqual('Draw');
});
