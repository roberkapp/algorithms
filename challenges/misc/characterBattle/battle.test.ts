import { expect, test } from '@jest/globals';
import { battle } from './battle';

test('Given a war between "Hello" and "World" the result should be "We lost"', () => {
  expect(battle('Hello', 'World')).toBe('We lost');
});

test('Given a war between "pizza" and "salad" the result should be "We won', () => {
  expect(battle('pizza', 'salad')).toBe('We won');
});

test('Given a war between "Kn!ght" and "orc" the result should be "Opponent retreated"', () => {
  expect(battle('kn!ght', 'orc')).toBe('Opponent retreated');
});

test('Given a war between "PC" and "Mac" the result should be "We retreated', () => {
  expect(battle('PC', 'Mac')).toBe('We retreated');
});

test('Given a war between "Wizards" and "Dragons" the result should be "It was a tie', () => {
  expect(battle('Wizards', 'Dragons')).toBe('It was a tie');
});
