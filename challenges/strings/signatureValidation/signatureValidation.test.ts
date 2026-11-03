import { expect, test } from '@jest/globals';
import { signatureValidation } from './signatureValidation';

test('Given a message: "foo", a key: "bar" and a signature number: 57 should return true', () => {
  expect(signatureValidation('foo', 'bar', 57)).toBeTruthy();
});

test('Given a message: "Is this valid?", a key: "No" and a signature number: 210 should return false', () => {
  expect(signatureValidation('Is this valid?', 'No', 210)).toBeFalsy();
});

test('Given a message: "Is this valid?", a key: "Yes" and a signature number: 233 should return true', () => {
  expect(signatureValidation('Is this valid?', 'Yes', 233)).toBeTruthy();
});
