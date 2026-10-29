import { expect, test } from '@jest/globals';
import { getRoommates } from './roommates';

test('Given an array of people: [{ "name": "Alice", "group": "A" }, { "name": "Bob", "group": "B" }, { "name": "Carol", "group": "A" }] should return: ["Alice and Carol", "Bob"]', () => {
  expect(
    getRoommates([
      { name: 'Alice', group: 'A' },
      { name: 'Bob', group: 'B' },
      { name: 'Carol', group: 'A' },
    ]),
  ).toEqual(['Alice and Carol', 'Bob']);
});

test('Given an array of people: [{ name: "Kevin", group: "A" },{ name: "Yuri", group: "A" },{ name: "Hugo", group: "B" },{ name: "Violet", group: "A" },{ name: "Brett", group: "A" },{ name: "Wayne", group: "B" },]  should return: ["Kevin and Yuri", "Violet and Brett", "Hugo and Wayne"]', () => {
  expect(
    getRoommates([
      { name: 'Kevin', group: 'A' },
      { name: 'Yuri', group: 'A' },
      { name: 'Hugo', group: 'B' },
      { name: 'Violet', group: 'A' },
      { name: 'Brett', group: 'A' },
      { name: 'Wayne', group: 'B' },
    ]),
  ).toEqual(['Kevin and Yuri', 'Violet and Brett', 'Hugo and Wayne']);
});
