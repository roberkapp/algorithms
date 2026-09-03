import { HANDS } from './models';

const getConsecutives = (arr: number[]): number => {
  let current = 1;
  let best = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      current++;
      best = Math.max(current, best);
    } else current = 1;
  }
  return best;
};

// @CodeScene(disable:"Complex Method")
export function fiveDice(dices: number[]): HANDS {
  const ocurrences: Record<string, number> = {};
  dices.forEach((dice) => (ocurrences[dice] = ocurrences[dice] + 1 || 1));

  const hand = Object.values(ocurrences);
  const uniques = Object.keys(ocurrences)
    .sort((a, b) => Number(a) - Number(b))
    .map(Number);

  const consecutives = getConsecutives(uniques);

  const fiveOfAKind = hand.length === 1;
  const fourOfAKind = hand.includes(4);
  const fullHouse = hand.length === 2 && hand.includes(3);
  const large_straight = consecutives === 5;
  const small_straight = consecutives === 4;
  const threeOfAKind = hand.length === 3 && hand.includes(3);
  const twoPair = hand.length === 3 && hand.includes(2);
  const pair = hand.length === 4 && hand.includes(2);
  const noPair = hand.length === 5;

  if (fiveOfAKind) return HANDS.FIVE_OF_A_KIND;
  if (fourOfAKind) return HANDS.FOUR_OF_A_KIND;
  if (fullHouse) return HANDS.FULL_HOUSE;
  if (large_straight) return HANDS.LARGE_STRAIGHT;
  if (small_straight) return HANDS.SMALL_STRAIGHT;
  if (threeOfAKind) return HANDS.THREE_OF_A_KIND;
  if (twoPair) return HANDS.TWO_PAIR;
  if (pair) return HANDS.PAIR;
  if (noPair) return HANDS.NO_PAIR;
  return HANDS.NO_PAIR;
}
