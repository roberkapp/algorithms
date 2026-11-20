export function longestWord(sentence: string) : string{
    let longest = '';

    for(const word of sentence.split(' ')){
        const cleanWord =  word.replace(/[^a-z]/ig,'');
        if(cleanWord.length > longest.length) longest = cleanWord;
    }
    return longest;
}