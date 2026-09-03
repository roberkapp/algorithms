import { countBussinessDays } from './bussiness_day_count';
import { test, expect } from '@jest/globals';

test('', () => {
  expect(countBussinessDays('2026-02-24', '2026-02-26')).toBe(3);
});
