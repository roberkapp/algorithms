export const hasUpperCase = (str: string) => /[A-Z]/g.test(str);

export const isLessThanLimit = (str1: string, str2: string, tenPercent: number) : boolean => {
    let counter = 0;

    for(let i = 0; i < str1.length; i++){
        const char1 = str1[i];
        const char2 = str2[i];

        if(char1 !== char2){
            counter++
            if(counter > tenPercent) return false;
        }             
    }
    return true;
}