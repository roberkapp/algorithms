import { emailSorter } from './emailSorter';
import { test, expect } from '@jest/globals';

test('Given an array of emails: ["jill@mail.com", "john@example.com", "jane@example.com"] should return ["jane@example.com", "john@example.com", "jill@mail.com"]', () => {
  expect(
    emailSorter(['jill@mail.com', 'john@example.com', 'jane@example.com'])
  ).toEqual(['jane@example.com', 'john@example.com', 'jill@mail.com']);
});

test('Given an array of emails: ["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"] should return ["SAM@ALPHA.com", "sammy@alpha.com", "sara@alpha.com", "Sarah@Alpha.com", "simon@beta.com", "Simone@Beta.com"]', () => {
  expect(
    emailSorter([
      'simon@beta.com',
      'sammy@alpha.com',
      'Sarah@Alpha.com',
      'SAM@ALPHA.com',
      'Simone@Beta.com',
      'sara@alpha.com',
    ])
  ).toEqual([
    'SAM@ALPHA.com',
    'sammy@alpha.com',
    'sara@alpha.com',
    'Sarah@Alpha.com',
    'simon@beta.com',
    'Simone@Beta.com',
  ]);
});
