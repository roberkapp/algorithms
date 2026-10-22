import { expect, test } from '@jest/globals';
import { calculateTips } from './calculateTips';

test('Given a meal price of $10 and a tip of %25 should return: ["$1.50", "$2.00", "$2.50"]', () => {
  expect(calculateTips('$10.00', '%25')).toEqual(['$1.50', '$2.00', '$2.50']);
});

test('Given a meal price of $89.67 and a tip of %26 should return: ["$13.45", "$17.93", "$23.31"]', () => {
  expect(calculateTips('$89.67', '%26')).toEqual(['$13.45', '$17.93', '$23.31']);
});

test('Given a meal price of $19.85. and a tip of %9 should return: ["$2.98", "$3.97", "$1.79"]', () => {
  expect(calculateTips('$19.85', '%9')).toEqual(['$2.98', '$3.97', '$1.79']);
});
