export function countCharacters(sentence: string) : string[] {
    const letters : Map<string, number> = new Map();

    for(const letter of sentence.toLowerCase().replace(/[^a-z]/g, '')){
        letters.set(letter, (letters.get(letter) || 0) + 1);
    }

    return [...letters.entries()]
        .sort(([aL,],[bL,]) => aL.localeCompare(bL))
        .map(([letter, quantity]) => `${letter} ${quantity}`);
}