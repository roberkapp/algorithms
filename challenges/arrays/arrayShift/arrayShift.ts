export function arrayShift(arr: (string | number)[], n: number) : (string|number)[]{
    if(!arr.length) return [];

    //Normalize the shift if it is bigger than the arr's length;
    n %= arr.length;

    const newArr : Array<string|number> = [];
    arr.forEach((item, index) => {
        // We calculate the destination index and use module operator to keep it in range
        const i = (index - n + arr.length) % arr.length;
        newArr[i] = item;
    })
    return newArr;
}