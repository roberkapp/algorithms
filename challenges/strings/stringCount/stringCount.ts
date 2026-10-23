export function stringCount(text: string, pattern: string): number {
  let currentIndex = text.indexOf(pattern);
  let occurrences = 0;

  while (currentIndex !== -1) {
    occurrences++;
    currentIndex = text.indexOf(pattern, currentIndex + 1);
  }

  return occurrences;
}
