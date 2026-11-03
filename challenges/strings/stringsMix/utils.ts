import type { MixedMap } from './models';

export const saveLetters = (word: string, map: MixedMap, id: number): void => {
  for (const letter of word) {
    if (!/[a-z]/.test(letter)) continue;

    if (!map.has(letter)) {
      map.set(letter, [0, 0]);
    }

    const stored = map.get(letter);
    if (stored) stored[id]++;
  }
};

export const filterMap = (map: MixedMap): string[] => {
  const result = [];
  for (const [letter, [c1, c2]] of map.entries()) {
    const max = Math.max(c1, c2);
    if (max <= 1) continue;

    const prefix = c1 === c2 ? '=:' : max === c2 ? '2:' : '1:';
    result.push(prefix + letter.repeat(max));
  }
  return result;
};

export const sortMixedStrings = (arr: string[]): string => {
  return arr
    .sort((a, b) => {
      const diff = b.length - a.length;
      return diff || (a < b ? -1 : a > b ? 1 : 0);
    })
    .join('/');
};
