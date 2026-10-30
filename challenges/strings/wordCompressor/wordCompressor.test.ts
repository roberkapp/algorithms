import { expect, test } from '@jest/globals';
import { compressor } from './wordCompressor';

test('Given a string: "hello hello hello" should return: "hello 1 1"', () => {
  expect(compressor('hello hello hello')).toEqual('hello 1 1');
});

test('Given a string: "the cat sat on the mat on which the cat sat" should return: "the cat sat on 1 mat 4 which 1 2 3"', () => {
  expect(compressor('the cat sat on the mat on which the cat sat')).toEqual(
    'the cat sat on 1 mat 4 which 1 2 3',
  );
});
