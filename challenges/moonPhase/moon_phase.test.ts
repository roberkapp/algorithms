import { moonPhase } from './moon_phase';
import { test, expect } from '@jest/globals';

test('Given a date 2000-01-13 its moon phase should be Waxing', () => {
  expect(moonPhase('2000-01-13')).toBe('Waxing');
});
