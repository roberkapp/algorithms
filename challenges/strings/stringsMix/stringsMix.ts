import type { MixedMap } from './models';
import { filterMap, saveLetters, sortMixedStrings } from './utils';

export function stringsMix(s1: string, s2: string): string {
  const map: MixedMap = new Map();
  const word1 = s1.split(' ');
  const word2 = s2.split(' ');

  for (const letter of word1) {
    saveLetters(letter, map, 0);
  }

  for (const letter of word2) {
    saveLetters(letter, map, 1);
  }

  return sortMixedStrings(filterMap(map));
}
