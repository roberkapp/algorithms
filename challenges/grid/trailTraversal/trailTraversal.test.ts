import { expect, test } from '@jest/globals';
import { navigateTrail } from './trailTraversal';

test('Given an array of strings: ["-----", "--TTG", "--T--", "--T--", "CTT--"] the path returned should be: RRUUURR', () => {
  expect(navigateTrail(['-----', '--TTG', '--T--', '--T--', 'CTT--'])).toEqual('RRUUURR');
});
