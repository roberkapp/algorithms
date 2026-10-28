export function makeLeet(str: string): string {
  const leetMap: Record<string, number> = {
    a: 4,
    e: 3,
    g: 9,
    i: 1,
    l: 1,
    o: 0,
    s: 5,
    t: 7,
  };

  return [...str].map((letter) => leetMap[letter] ?? letter).join('');
}
