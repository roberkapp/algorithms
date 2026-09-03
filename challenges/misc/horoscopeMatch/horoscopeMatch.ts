import { Percentages, ZODIACS } from './models';

const zodiacs: ZODIACS[] = [
  ZODIACS.ARIES,
  ZODIACS.TAURUS,
  ZODIACS.GEMINI,
  ZODIACS.CANCER,
  ZODIACS.LEO,
  ZODIACS.VIRGO,
  ZODIACS.LIBRA,
  ZODIACS.SCORPIO,
  ZODIACS.SAGITTARIUS,
  ZODIACS.CAPRICORN,
  ZODIACS.AQUARIUS,
  ZODIACS.PISCES,
];

const compatibilities: Record<number, Percentages> = {
  0: '100%',
  1: '40%',
  2: '80%',
  3: '30%',
  4: '90%',
  5: '20%',
  6: '50%',
};

const closestDistance = (sign1: ZODIACS, sign2: ZODIACS): number => {
  const index1 = zodiacs.indexOf(sign1);
  const index2 = zodiacs.indexOf(sign2);

  // this substraction get us the distance looking -><-
  const diff = Math.abs(index1 - index2);
  // by checking this distance lets say Pisces and Aries (11 & 0) = 11 -> (12 - 11 = 1)
  // its looking like this <- ->
  return Math.min(diff, zodiacs.length - diff);
};

export function horoscopeMatch(sign1: ZODIACS, sign2: ZODIACS): Percentages {
  const distance = closestDistance(sign1, sign2);
  return compatibilities[distance];
}
