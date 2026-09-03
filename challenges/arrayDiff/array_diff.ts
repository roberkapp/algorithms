export function arrayDiff(arr1: string[], arr2: string[]) {
  const words = new Map<string, number>();

  const allItems = [...arr1, ...arr2];
  for (const item of allItems) {
    words.set(item, (words.get(item) ?? 0) + 1);
  }
  // Me quedo con las palabras que aparecen una sola vez, y las ordeno alfabeticamente
  return [...words.entries()]
    .filter(([_, val]) => val === 1)
    .map(([key]) => key)
    .sort((a, b) => a.localeCompare(b));
}
