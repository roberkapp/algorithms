import { expect, test } from '@jest/globals';
import { isValidIPv4 } from './isValidIpv4';

test('Given an ipv4 code: "192.167.1.1" should return true', () => {
  expect(isValidIPv4('192.168.1.1')).toBeTruthy();
});

test('Given an ipv4 code: "255.01.50.111" should return false', () => {
  expect(isValidIPv4('255.01.50.111')).toBeFalsy();
});
