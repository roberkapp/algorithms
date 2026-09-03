import { expect, test } from '@jest/globals';
import { DRIVE_UNITS, VIDEO_UNITS } from './models';
import { numberOfVideos } from './numberOfVideos';

test('Given 500MB as video size for each video and 100GB of drive should return 200 videos', () => {
  expect(numberOfVideos(500, VIDEO_UNITS.MB, 100, DRIVE_UNITS.GB)).toEqual(200);
});
