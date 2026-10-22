import { expect, test } from '@jest/globals';
import { creditCardMasker } from './creditCardMasker';

test('Given a card number: "4012-8888-8888-1881" should return: "****-****-****-1881"', () => {
  expect(creditCardMasker('4012-8888-8888-1881')).toEqual('****-****-****-1881');
});

test('Given a card number: "5105 1051 0510 5100" should return: "**** **** **** 5100"', () => {
  expect(creditCardMasker('5105 1051 0510 5100')).toEqual('**** **** **** 5100');
});
