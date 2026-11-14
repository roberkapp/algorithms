export function perimeter(n: number) : number{
    function getFibonacci(first = 1, second = 1, index = 1, total = 1): number {
        const next = first + second;
        if(index === n + 1) return total;

        return getFibonacci(second, next, index + 1, total + second);
    }

    const f = getFibonacci();
    return f * 4;
}
