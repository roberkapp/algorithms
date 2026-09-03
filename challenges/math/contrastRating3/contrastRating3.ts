import { constants } from './models';
import { getLuminance } from './utils';

export function contrastRating3(rgb1: number[], rgb2: number[], isLargeText: boolean) {
  const luminance1 = getLuminance(rgb1);
  const luminance2 = getLuminance(rgb2);

  const contrastRatio =
    (luminance1 + constants.contrastRatio) / (luminance2 + constants.contrastRatio);

  const aaa = isLargeText ? constants.largeAAA : constants.normalAAA;
  const aa = isLargeText ? constants.largeAA : constants.normalAA;

  if (contrastRatio >= aaa) return 'AAA';
  if (contrastRatio >= aa) return 'AA';
  return 'Fail';
}
