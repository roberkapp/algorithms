export function compressor(str: string): string {
  const storedWords: Map<string, number> = new Map();
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    const current = words[i];

    if (!storedWords.has(current)) {
      storedWords.set(current, i + 1);
    } else {
      words[i] = String(storedWords.get(current));
    }
  }
  return words.join(' ');
}
