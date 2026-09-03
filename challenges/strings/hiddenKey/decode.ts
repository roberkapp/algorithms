import { getKeyValue, getLetterIndex } from './utils';

export function decode(message: string): string {
  const firstLettersKeys = 'VLHCGMDLNH';
  let spaceCounter = 0;

  return [...message]
    .map((letter, index) => {
      if (letter === ' ') {
        spaceCounter++;
        return letter;
      }
      const normalizedIndex = (index - spaceCounter) % firstLettersKeys.length;
      const key = firstLettersKeys[normalizedIndex];
      const shift = (getLetterIndex(letter) - getKeyValue(key) + 26) % 26;
      return String.fromCharCode(shift + 65);
    })
    .join('');
}
