export function buzzFizz(sequence: (string|number)[]) : boolean{
    return sequence.every((item,i) => {
        const index = i + 1;
        if(index % 15 === 0) return item === 'FizzBuzz';
        if(index % 5 === 0) return item === 'Buzz';
        if(index % 3 === 0) return item === 'Fizz';
        return item === index;
    })
}