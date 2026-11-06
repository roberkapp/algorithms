import { expect, test } from '@jest/globals';
import { getWeekday } from './weekdayFinder';

test('Given a date: "2025-11-06" should return "Thursday"', () => {
  expect(getWeekday('2025-11-06')).toEqual('Thursday');
});

test('Given a date: "1999-12-31" should return "Friday"', () => {
  expect(getWeekday('1999-12-31')).toEqual('Friday');
});

test('Given a date: "1111-11-11" should return "Saturday"', () => {
  expect(getWeekday('1111-11-11')).toEqual('Saturday');
});

test('Given a date: "2112-12-21" should return "Wednesday"', () => {
  expect(getWeekday('2112-12-21')).toEqual('Wednesday');
});

test('Given a date: "2345-10-01" should return "Monday"', () => {
  expect(getWeekday('2345-10-01')).toEqual('Monday');
});
