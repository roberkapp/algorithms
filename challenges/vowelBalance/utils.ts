export const getHalfs = (s: string): string[] => {
  const half = Math.floor(s.length / 2);
  return [s.slice(0, half), s.slice(s.length - half)];
};

export const vowelCounter = (s: string): number =>
  (s.match(/[aeiou]/gi) || []).length;
