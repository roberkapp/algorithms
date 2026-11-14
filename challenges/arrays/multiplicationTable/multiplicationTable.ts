export function multiplicationTable(size: number) : number[][]{
    const response = [];
    for(let row = 1; row <= size; row++){
        response.push(Array.from({length: size}, (_,i) => (i + 1) * row))
    }
    return response;
}