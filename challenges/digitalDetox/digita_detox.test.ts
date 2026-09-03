import { digitalDetox } from './digital_detox';
import { test, expect } from '@jest/globals';

test('Given an array with these dates: ["2026-02-01 08:00:00", "2026-02-01 12:30:00"] should return true', () => {
  expect(
    digitalDetox(['2026-02-01 08:00:00', '2026-02-01 12:30:00'])
  ).toBeTruthy();
});

test('Given an array with these dates: ["2026-02-05 10:00:00", "2026-02-01 09:00:00", "2026-02-03 22:15:00", "2026-02-02 12:10:00", "2026-02-02 07:15:00", "2026-02-04 01:45:00", "2026-02-01 16:50:00", "2026-02-03 09:30:00"] should return false', () => {
  expect(
    digitalDetox([
      '2026-02-05 10:00:00',
      '2026-02-01 09:00:00',
      '2026-02-03 22:15:00',
      '2026-02-02 12:10:00',
      '2026-02-02 07:15:00',
      '2026-02-04 01:45:00',
      '2026-02-01 16:50:00',
      '2026-02-03 09:30:00',
    ])
  ).toBeFalsy();
});
