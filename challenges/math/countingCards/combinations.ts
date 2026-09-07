import { getFactorial } from './utils';

export function combinations(cards: number): number {
  const deck = 52;

  const response = getFactorial(deck) / (getFactorial(cards) * getFactorial(deck - cards));
  return response;
}
