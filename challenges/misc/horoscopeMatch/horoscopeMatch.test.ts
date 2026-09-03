import { expect, test } from '@jest/globals';
import { horoscopeMatch } from './horoscopeMatch';
import { ZODIACS } from './models';

test('Expects Libra and Sagittarius to be 80%', () => {
  expect(horoscopeMatch(ZODIACS.LIBRA, ZODIACS.SAGITTARIUS)).toBe('80%');
});

test('Expects Gemini and Scorpio to be 20%', () => {
  expect(horoscopeMatch(ZODIACS.GEMINI, ZODIACS.SCORPIO)).toBe('20%');
});
