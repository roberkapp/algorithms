export function decompress(str: string): string {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    const current = words[i];
    if (Number.isNaN(+current)) continue;

    words[i] = words[Number(current) - 1];
  }

  return words.join(' ');
}
