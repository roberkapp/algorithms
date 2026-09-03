import { expect, test } from '@jest/globals';
import { decode } from './decode';

test('Given a message: "YAVJYNXE" should return "CONGRATS"', () => {
  expect(decode('YAVJYNXE')).toBe('CONGRATS');
});
