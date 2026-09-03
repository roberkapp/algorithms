function getShortestDistance(char1: string, char2: string): number {
  const direct = Math.abs(char1.charCodeAt(0) - char2.charCodeAt(0));
  const alphabetSize = 26;
  return Math.min(direct, alphabetSize - direct);
}

export function letterDistance(str1: string, str2: string): number {
  let counter = 0;

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    counter += getShortestDistance(char1, char2);
  }

  return counter;
}
