import { expect, test } from '@jest/globals';
import { longestWord } from './longestWord';

test('Given the sentence: "The quick red fox" should return "quick"', () => {
    expect(longestWord('The quick red fox')).toEqual('quick');
});

test('Given the sentence: "Hello coding challenge." should return "challenge"', () => {
    expect(longestWord('Hello coding challenge.')).toEqual('challenge');
});

test('Given the sentence: "Wouldn\'t you like to know." should return "Wouldnt"', () => {
    expect(longestWord("Wouldn\'t you like to know.")).toEqual('Wouldnt');
});
