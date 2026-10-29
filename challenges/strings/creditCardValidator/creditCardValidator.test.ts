import { expect, test } from '@jest/globals';
import { creditCardValidator } from './creditCardValidator';

test('Given a card number: "4532015112830366" should return true', () => {
  expect(creditCardValidator('4532015112830366')).toBeTruthy();
});

test('Given a card number: "371449635398431" should return true', () => {
  expect(creditCardValidator('371449635398431')).toBeTruthy();
});

test('Given a card number: "4532015112830367" should return false', () => {
  expect(creditCardValidator('4532015112830367')).toBeFalsy();
});
