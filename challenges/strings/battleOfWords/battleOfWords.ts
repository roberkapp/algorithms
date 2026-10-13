import type { BattleResponse } from './models';
import { calculateWordValue } from './utils';

export function battleOfWords(ourTeam: string, opponent: string): BattleResponse {
  const ourWords = ourTeam.split(' ');
  const opponentWords = opponent.split(' ');

  let ourPoints = 0,
    opponentPoints = 0;

  for (let i = 0; i < ourWords.length; i++) {
    const ourWord = ourWords[i];
    const opponentWord = opponentWords[i];

    const ourWordValue = calculateWordValue(ourWord);
    const opponentWordValue = calculateWordValue(opponentWord);

    if (ourWordValue > opponentWordValue) ourPoints++;
    if (opponentWordValue > ourWordValue) opponentPoints++;
  }

  if (ourPoints > opponentPoints) return 'We win';
  if (opponentPoints > ourPoints) return 'We lose';
  return 'Draw';
}
