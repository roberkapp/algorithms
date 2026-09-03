import { expect, test } from '@jest/globals';
import { evaluate } from './evaluate';
import { OPERATORS } from './models';

test('Given an array of numbers: [5,6,7,8,9] and operators: [+, -] should return 3', () => {
  expect(evaluate([5, 6, 7, 8, 9], [OPERATORS['+'], OPERATORS['-']])).toBe(3);
});

test('Given an array of numbers: [17,61,40,24,38,14] and operators: [+, %] should return 38', () => {
  expect(evaluate([17, 61, 40, 24, 38, 14], [OPERATORS['+'], OPERATORS['%']])).toBe(38);
});

test('Given an array of numbers: [11,4,10,17,2] and operators: [*, *, %] should return 30', () => {
  expect(evaluate([11, 4, 10, 17, 2], [OPERATORS['*'], OPERATORS['*'], OPERATORS['%']])).toBe(30);
});

test('Given an array of numbers: [33,11,29,13] and operators: [/, -] should return -2', () => {
  expect(evaluate([33, 11, 29, 13], [OPERATORS['/'], OPERATORS['-']])).toBe(-2);
});
