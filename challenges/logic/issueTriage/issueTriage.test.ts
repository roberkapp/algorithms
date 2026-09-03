import { triageIssue } from './issueTriage';
import { test, expect } from '@jest/globals';

test('checks that 86400000 and Lets fix it returns leave it', () => {
  expect(triageIssue(86400000, 'Lets fix it')).toEqual('leave it');
});

test('checks that 1209600000 and still waiting returns leave it', () => {
  expect(triageIssue(1209600000, 'still waiting')).toEqual('bump it');
});
