export function uniqueInOrder(iterable: string | (string | number)[]): Array<number|string>{
    return [...iterable].reduce((acc, curr) => {
        if(acc.at(-1) !== curr) acc.push(curr);
        return acc;
    }, [] as (string|number)[])
}