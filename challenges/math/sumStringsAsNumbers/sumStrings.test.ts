import { expect, test } from '@jest/globals';
import { sumStrings } from './sumStrings';

test('Given a string of numbers: "123" and a second string of numbers: "456" should return "579"', () => {
  expect(sumStrings('123', '456')).toEqual('579');
});
