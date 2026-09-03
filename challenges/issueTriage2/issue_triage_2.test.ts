import { triageIssue2 } from './issue_triage_2';
import { test, expect } from '@jest/globals';

test('process app crashes with error and an empty array to return [bug, needs triage]', () => {
  expect(triageIssue2('app crashes with error', [])).toEqual([
    'bug',
    'needs triage',
  ]);
});
