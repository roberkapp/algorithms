export const getLetterValue = (letter: string) =>
  letter === letter.toUpperCase() ? letter.charCodeAt(0) - 38 : letter.charCodeAt(0) - 96;
