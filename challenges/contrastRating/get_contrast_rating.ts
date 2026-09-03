import { RATING_RESPONSE } from './models';

export function getContrastRating(ratio: string, isLargeText: boolean) {
  const castedRatio = Number(ratio);

  const aaa = isLargeText ? 4.5 : 7.0;
  const aa = isLargeText ? 3.0 : 4.5;

  if (castedRatio >= aaa) return RATING_RESPONSE.AAA;
  if (castedRatio >= aa) return RATING_RESPONSE.AA;
  return RATING_RESPONSE.FAIL;
}
