export const getLetterValue = (letter: string): number => letter.charCodeAt(0) - 96;

export const calculateWordValue = (word: string): number => {
  let wordValue = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const letterValue = getLetterValue(letter.toLowerCase());

    if (letter === letter.toUpperCase()) {
      wordValue += letterValue * 2;
    } else {
      wordValue += letterValue;
    }
  }
  return wordValue;
};
