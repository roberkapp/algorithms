// @CodeScene(disable:"Bumpy Road Ahead")
export function wordGuesser(word: string, guess: string) {
  const letters = new Map<string, number>();
  const response = Array.from({ length: word.length }).fill(0);

  // poblamos el map
  for (const letter of word) {
    letters.set(letter, (letters.get(letter) ?? 0) + 1);
  }

  // checkeamos por coincidencias exactas primero
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const attempt = guess[i];

    if (attempt === letter) {
      response[i] = 2;
      const count = letters.get(letter) ?? 0;
      if (count === 1) {
        letters.delete(letter);
      } else {
        letters.set(letter, count - 1);
      }
    }
  }

  // luego buscamos si hay intentos validos en otras posiciones
  for (let i = 0; i < word.length; i++) {
    //si en la posicion ya hay un acierto sigo
    if (response[i] === 2) continue;
    const attempt = guess[i];

    if (letters.has(attempt)) {
      response[i] = 1;

      const count = letters.get(attempt) ?? 0;
      if (count === 1) {
        letters.delete(attempt);
      } else {
        letters.set(attempt, count - 1);
      }
    }
  }
  return response.join('');
}
