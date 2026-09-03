import { expect, test } from '@jest/globals';
import { tipCalculator } from './tipCalculator';

test('given a meal price of $10.00 and a custom tip of 25% should return ["$1.50", "$2.00", "$2.50"].', () => {
  expect(tipCalculator('$10.00', '25%')).toEqual(['$1.50', '$2.00', '$2.50']);
});
