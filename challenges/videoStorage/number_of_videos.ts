import {
  bytesDriveUnitEquivalences,
  bytesVideoUnitEquivalences,
} from './const';
import { DRIVE_UNITS, Response, VIDEO_UNITS } from './models';

export function numberOfVideos(
  videoSize: number,
  videoUnit: VIDEO_UNITS,
  driveSize: number,
  driveUnit: DRIVE_UNITS
): Response {
  const videoUnitEquivalence = bytesVideoUnitEquivalences[videoUnit];
  const driveUnitEquivalence = bytesDriveUnitEquivalences[driveUnit];

  if (!videoUnitEquivalence) return 'Invalid video unit';
  if (!driveUnitEquivalence) return 'Invalid drive unit';

  return Math.floor(
    (driveSize * driveUnitEquivalence) / (videoSize * videoUnitEquivalence)
  );
}
