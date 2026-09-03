import { navigateTrail } from './trailTraversal';
import { test, expect } from '@jest/globals';

test('Given an array of strings: ["-----", "--TTG", "--T--", "--T--", "CTT--"] the path returned should be: RRUUURR', () => {
  expect(navigateTrail(['-----', '--TTG', '--T--', '--T--', 'CTT--'])).toEqual(
    'RRUUURR'
  );
});
