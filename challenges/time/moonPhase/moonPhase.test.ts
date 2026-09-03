import { expect, test } from '@jest/globals';
import { moonPhase } from './moonPhase';

test('Given a date 2000-01-13 its moon phase should be Waxing', () => {
  expect(moonPhase('2000-01-13')).toBe('Waxing');
});
