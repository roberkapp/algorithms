import { expect, test } from '@jest/globals';
import { isSpam } from './isSpam';

test('Given a phone number: "+0 (200) 234-0182" should return false', () => {
  expect(isSpam('+0 (200) 234-0182')).toBeFalsy();
});

test('Given a phone number: "+091 (555) 309-1922" should return true', () => {
  expect(isSpam('+091 (555) 309-1922')).toBeTruthy();
});
