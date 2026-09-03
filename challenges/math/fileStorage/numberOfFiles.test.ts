import { expect, test } from '@jest/globals';
import { UNITS } from './models';
import { numberOfFiles } from './numberOfFiles';

test('Given files with size of 500KB each and a drive of 1GB should return 2000 files to save', () => {
  expect(numberOfFiles(500, UNITS.KB, 1)).toEqual(2000);
});

test('Given files with size of 4096B each and a drive of 1.5GB should return 366210 files to save', () => {
  expect(numberOfFiles(4096, UNITS.B, 1.5)).toEqual(366210);
});
