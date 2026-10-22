export function wiseSpeak(sentence: string): string {
  const wiseWords = new Set(['have', 'must', 'are', 'will', 'can']);
  const words = sentence.slice(0, -1).split(' ');
  const punctuation = sentence.at(-1);

  const index = words.findIndex((word) => wiseWords.has(word));

  const firstPart = words
    .slice(0, index + 1)
    .join(' ')
    .toLowerCase();
  const secondPart = words.slice(index + 1).join(' ');

  return `${secondPart[0].toUpperCase()}${secondPart.slice(1)}, ${firstPart}${punctuation}`;
}
