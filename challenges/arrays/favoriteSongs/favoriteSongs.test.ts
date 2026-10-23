import { expect, test } from '@jest/globals';
import { favoriteSongs } from './favoriteSongs';

test('Given a playlist: [{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ] should return ["Sync or Swim", "Earbud Blues"]', () => {
  expect(
    favoriteSongs([
      { title: 'Sync or Swim', plays: 3 },
      { title: 'Byte Me', plays: 1 },
      { title: 'Earbud Blues', plays: 2 },
    ]),
  ).toEqual(['Sync or Swim', 'Earbud Blues']);
});

test('Given a playlist: [{ title: "Skip Track", plays: 98 },{ title: "99 Downloads", plays: 99 },{ title: "Clickwheel Love", plays: 100 }] should return ["Clickwheel Love", "Downloads"]', () => {
  expect(
    favoriteSongs([
      { title: 'Skip Track', plays: 98 },
      { title: '99 Downloads', plays: 99 },
      { title: 'Clickwheel Love', plays: 100 },
    ]),
  ).toEqual(['Clickwheel Love', '99 Downloads']);
});
