import { test, expect } from '@jest/globals';
import { getContrastRating } from './getContrastRating';

test('Given a ration of 7.5 and normal text should return AAA', () => {
  expect(getContrastRating('7.5', false)).toEqual('AAA');
});

test('Given a ration of 4.8 and normal text should return AA', () => {
  expect(getContrastRating('4.8', false)).toEqual('AA');
});

test('Given a ration of 2.7 and normal text should return Fail', () => {
  expect(getContrastRating('2.7', false)).toEqual('Fail');
});
