import { RESPONSES } from './models';
import { calculateStrength } from './utils';

export function battle(myArmy: string, opposingArmy: string): RESPONSES {
  if (myArmy.length > opposingArmy.length) return RESPONSES.OPPONENT_RETREATED;
  if (myArmy.length < opposingArmy.length) return RESPONSES.WE_RETREATED;

  const scores = {
    mine: 0,
    opponent: 0,
  };

  for (let i = 0; i < myArmy.length; i++) {
    const mySoldier = myArmy[i];
    const opponentSoldier = opposingArmy[i];

    const myValue = calculateStrength(mySoldier);
    const opponentValue = calculateStrength(opponentSoldier);

    if (myValue > opponentValue) scores.mine++;
    if (opponentValue > myValue) scores.opponent++;
  }

  if (scores.mine > scores.opponent) return RESPONSES.WON;
  if (scores.opponent > scores.mine) return RESPONSES.LOST;
  return RESPONSES.TIE;
}
