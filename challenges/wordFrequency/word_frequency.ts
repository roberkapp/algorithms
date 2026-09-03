export function getWords(paragraph: string): string[] {
  const normalizedParagraph = paragraph.toLowerCase().replace(/[!.,]/g, '');
  const words = new Map<string, number>();

  normalizedParagraph
    .split(' ')
    .forEach((word) => words.set(word, (words.get(word) ?? 0) + 1));

  return [...words.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key)
    .slice(0, 3);
}
