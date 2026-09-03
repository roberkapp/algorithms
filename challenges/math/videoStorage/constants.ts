import type { DRIVE_UNITS, VIDEO_UNITS } from './models';

export const bytesVideoUnitEquivalences: Record<VIDEO_UNITS, number> = {
  B: 1,
  KB: 1000,
  MB: 1000 ** 2,
  GB: 1000 ** 3,
};

export const bytesDriveUnitEquivalences: Record<DRIVE_UNITS, number> = {
  GB: 1000 ** 3,
  TB: 1000 ** 4,
};
