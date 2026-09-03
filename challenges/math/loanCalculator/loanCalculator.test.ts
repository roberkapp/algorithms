import { expect, test } from '@jest/globals';
import { getLoanSchedule } from './loanCalculator';

test('Given a loan of 1000, a annual rate of 0 and a monthly payment of 200 should return [1000,800,600,400,200,0]', () => {
  expect(getLoanSchedule(1000, 0, 200)).toEqual([1000, 800, 600, 400, 200, 0]);
});
