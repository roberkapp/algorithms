export function gcm(a: number, b: number) : number {
    while(b !== 0){
        [a,b] = [b, a % b];
    }
    return a;
}