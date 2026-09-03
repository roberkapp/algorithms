function setenceParser(oldFirstHalf: string[], secondHalf: string[]): string {
  const punctuation = secondHalf.at(-1)?.at(-1);

  const newFirstHalf = secondHalf.map((word, index, arr) => {
    if (index === 0) return word[0].toUpperCase() + word.substring(1);
    if (index === arr.length - 1) return word.substring(0, word.length - 1);
    return word;
  });

  return `${newFirstHalf.join(' ')}, ${oldFirstHalf.join(' ')}${punctuation}`;
}

export function wiseSpeak(sentence: string): string {
  const wiseWords = new Set(['have', 'must', 'are', 'will', 'can']);
  const words = sentence.split(' ').map((word) => word.toLowerCase());

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!wiseWords.has(word)) continue;

    const firstHalf = words.slice(0, i + 1);
    const secondHalf = words.slice(i + 1);

    return setenceParser(firstHalf, secondHalf);
  }
  return '';
}
