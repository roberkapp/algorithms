import { expect, test } from '@jest/globals';
import { spiralMatrix } from './spiralMatrix';

test('Given a matrix [["a", "b", "c", "d"], ["l", "m", "n", "e"], ["k", "p", "o", "f"], ["j", "i", "h", "g"]] should return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]', () => {
  expect(
    spiralMatrix([
      ['a', 'b', 'c', 'd'],
      ['l', 'm', 'n', 'e'],
      ['k', 'p', 'o', 'f'],
      ['j', 'i', 'h', 'g'],
    ]),
  ).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']);
});
