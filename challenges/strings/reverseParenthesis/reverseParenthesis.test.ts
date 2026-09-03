import { test, expect } from '@jest/globals';
import { reverseParenthesis } from './reverseParenthesis';

test('Given a string: "(f(b(dc)e)a)" should clear parenthesis and return "abcdef"', () => {
  expect(reverseParenthesis('(f(b(dc)e)a)')).toBe('abcdef');
});

test('Given a string: "((is?)(a(t d)h)e(n y( uo)r)aC)" should clear parenthesis and return "Can you read this?"', () => {
  expect(reverseParenthesis('((is?)(a(t d)h)e(n y( uo)r)aC)')).toBe(
    'Can you read this?'
  );
});
