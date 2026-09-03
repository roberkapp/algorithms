export function isValidNumber(n: string, base: number): boolean {
  // Aprovechando el indice para medir la base se puede resolver fácil
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz';

  return [...n].every((char) => chars.indexOf(char.toLowerCase()) < base);
}
