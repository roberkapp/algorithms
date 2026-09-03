import { test, expect } from '@jest/globals';
import { parseBold } from './parse_bold';

test('Given a markdown "**This is bold**" should return this html: "<b>This is bold</b>"', () => {
  expect(parseBold('**This is bold**')).toBe('<b>This is bold</b>');
});

test('Given a markdown "__This is also bold__" should return this html: "<b>This is also bold</b>', () => {
  expect(parseBold('__This is also bold__')).toBe('<b>This is also bold</b>');
});

test('Given a markdown "**This is not bold **" should return this text: "**This is not bold **', () => {
  expect(parseBold('**This is not bold **')).toBe('**This is not bold **');
});
