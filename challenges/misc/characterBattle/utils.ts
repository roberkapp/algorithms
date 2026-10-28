export const calculateStrength = (char: string): number => {
  if (/[0-9]/.test(char)) return Number(char);
  const code = char.charCodeAt(0);

  const isLowerCase = code >= 97 && code <= 122;
  const isUpperCase = code >= 65 && code <= 90;

  if (isUpperCase) return code - 'A'.charCodeAt(0) + 26;
  if (isLowerCase) return code - 'a'.charCodeAt(0) + 1;
  return 0;
};
