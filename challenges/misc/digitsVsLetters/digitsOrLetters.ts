import type { DigitsOrLettersResponse } from './model';

export function digitsOrLetters(str: string): DigitsOrLettersResponse {
  const matchLetters = str.match(/[a-z]/gi)?.length || 0;
  const matchDigits = str.match(/[0-9]/g)?.length || 0;

  if (matchLetters > matchDigits) return 'letters';
  if (matchDigits > matchLetters) return 'digits';
  return 'tie';
}
