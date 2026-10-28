export function buildAcronym(str: string): string {
  const specialWords = new Set(['a', 'for', 'an', 'and', 'by', 'of']);

  return str
    .split(' ')
    .map((word, index) => {
      const validParse = !specialWords.has(word) || (specialWords.has(word) && index === 0);
      if (validParse) {
        return word[0].toUpperCase();
      }
      return '';
    })
    .join('');
}
