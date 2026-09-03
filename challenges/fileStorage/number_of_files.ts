import { bytesEquivalences } from './const';
import { UNITS } from './models';

export function numberOfFiles(
  fileSize: number,
  fileUnit: UNITS,
  driveSizeGb: number
): number {
  const fileInBytes = fileSize * bytesEquivalences[fileUnit];
  const driveInBytes = driveSizeGb * 1000 ** 3;
  return Math.floor(driveInBytes / fileInBytes);
}
