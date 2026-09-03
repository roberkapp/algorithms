import { expect, test } from '@jest/globals';
import { triageIssue2 } from './issueTriage2';

test('process app crashes with error and an empty array to return [bug, needs triage]', () => {
  expect(triageIssue2('app crashes with error', [])).toEqual(['bug', 'needs triage']);
});
