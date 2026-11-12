export function countVowelsAndConsonants(str: string): [number, number] {
  const vowels = str.match(/[aeiou]/gi)?.length || 0;
  const consonants = str.match(/[^aeiou_\W]/gi)?.length || 0;
  return [vowels, consonants];
}
