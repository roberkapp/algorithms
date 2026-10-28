import { expect, test } from '@jest/globals';
import { buildAcronym } from './acronymBuilder';

test('Given a string: "Search Engine Optimization" should return acronym: "SEO"', () => {
  expect(buildAcronym('Search Engine Optimization')).toEqual('SEO');
});

test('Given a string: "Federal Bureau of Investigation" should return acronym: "FBI"', () => {
  expect(buildAcronym('Federal Bureau of Investigation')).toEqual('FBI');
});

test('Given a string: "An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily" should return acronym: "AUHWPOTIMSH"', () => {
  expect(
    buildAcronym(
      'An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily',
    ),
  ).toEqual('AUHWPOTIMSH');
});
