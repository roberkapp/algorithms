export function fizzBuzz(n: number) : (number | string)[]{
    return Array.from({length: n}, (_, i) => {
        const index = i + 1;
        if(index % 15 === 0) return 'FizzBuzz';
        if(index % 5 === 0) return 'Buzz';
        if(index % 3 === 0) return 'Fizz';

        return index;
    })
}