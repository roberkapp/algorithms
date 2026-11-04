import { expect, test } from '@jest/globals';
import { imageSearch } from './imageSearch';

test('Given an array of images:["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"] should return a filtered array: ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"]', () => {
  expect(
    imageSearch(
      ['cat.jpg', 'dogToy.jpeg', 'kitty-cat.png', 'catNip.jpeg', 'franken_cat.gif'],
      'Cat',
    ),
  ).toEqual(['cat.jpg', 'kitty-cat.png', 'catNip.jpeg', 'franken_cat.gif']);
});

test('Given an array of images:["Moon.png", "sun.jpeg", "stars.png"] should return a filtered array: ["Moon.png", "stars.png"]', () => {
  expect(imageSearch(['Moon.png', 'sun.jpeg', 'stars.png'], 'PNG')).toEqual([
    'Moon.png',
    'stars.png',
  ]);
});
