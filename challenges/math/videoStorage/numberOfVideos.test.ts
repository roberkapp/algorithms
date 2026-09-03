import { test, expect } from '@jest/globals';
import { numberOfVideos } from './numberOfVideos';
import { DRIVE_UNITS, VIDEO_UNITS } from './models';

test('Given 500MB as video size for each video and 100GB of drive should return 200 videos', () => {
  expect(numberOfVideos(500, VIDEO_UNITS.MB, 100, DRIVE_UNITS.GB)).toEqual(200);
});
