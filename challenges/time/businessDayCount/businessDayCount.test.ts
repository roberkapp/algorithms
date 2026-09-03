import { expect, test } from '@jest/globals';
import { countBussinessDays } from './businessDayCount';

test('', () => {
  expect(countBussinessDays('2026-02-24', '2026-02-26')).toBe(3);
});
