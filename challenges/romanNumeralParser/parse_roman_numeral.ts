export function parseRomanNumeral(numeral: string): number {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = 0;

  for (let i = 0; i < numeral.length; i++) {
    const current = symbols[numeral[i] as keyof typeof symbols];
    const next = symbols[numeral[i + 1] as keyof typeof symbols];
    // si es menor simplemente lo agrego negativamente luego al stackearse lo siguiente se substrae
    num += current < next ? -current : current;
  }
  return num;
}
