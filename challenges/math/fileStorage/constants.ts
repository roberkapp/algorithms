import { UNITS } from './models';

export const bytesEquivalences: Record<UNITS, number> = {
  B: 1,
  KB: 1000,
  MB: 1000 ** 2,
  GB: 1000 ** 3,
};
