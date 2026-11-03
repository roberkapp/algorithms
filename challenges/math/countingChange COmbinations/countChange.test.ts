import { expect, test } from '@jest/globals';
import { countChange } from './countChange';

test('Given an amount: 10 and coins: [5,2,3] should return 4 ways.', () => {
  expect(countChange(10, [5, 2, 3])).toEqual(4);
});
