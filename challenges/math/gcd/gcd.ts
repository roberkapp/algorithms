export function gcd(x: number, y: number) : number {
    const smaller = Math.min(x, y);

    for(let i = smaller; i > 0; i--){
        if(x % i === 0 && y % i === 0) return i;
    }
    return 1;
}