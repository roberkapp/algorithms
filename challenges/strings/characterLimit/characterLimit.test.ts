import { expect, test } from '@jest/globals';
import { characterLimit } from './characterLimit';

test('Given a message: "Hello world" should return short post', () => {
  expect(characterLimit('Hello world')).toEqual('short post');
});

test('Given a message: "This is a longer message but still under eighty characters." should return "long post"', () => {
  expect(characterLimit('This is a longer message but still under eighty characters.')).toEqual(
    'long post',
  );
});

test('Given a message: "This message is too long to fit into either of the character limits for a social media post." should return "invalid post"', () => {
  expect(
    characterLimit(
      'This message is too long to fit into either of the character limits for a social media post.',
    ),
  ).toEqual('invalid post');
});
