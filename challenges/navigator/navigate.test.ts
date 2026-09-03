import { navigate } from './navigate';
import { test, expect } from '@jest/globals';

test('Given a commands list: ["Visit About Us", "Back", "Forward"] should return "About us"', () => {
  expect(navigate(['Visit About Us', 'Back', 'Forward'])).toBe('About Us');
});

test('Given a commands list: ["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"] should return "Visit us"', () => {
  expect(
    navigate([
      'Visit About Us',
      'Visit Visit Us',
      'Forward',
      'Visit Contact Us',
      'Back',
    ])
  ).toBe('Visit Us');
});
