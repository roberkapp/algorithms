export function squareIntoSquares(n: number): number[] | null {
    const target = n ** 2;
    const path : number[] = [];

    function search(max: number, remaining: number) :  boolean {
        // When we reach 0 we end up recursion.
        if(remaining === 0) return true;
        // Limit would cut down numbers that are over the reamining;
        const limit = Math.min(max, Math.floor(Math.sqrt(remaining)));
        
        for(let i = limit; i >= 1; i--){
            // We use the closes number to n first
            path.push(i);
            // Start backtracking;
            if(search(i - 1, remaining - i ** 2)) return true;
            // If i doesnt work we pop that iteration
            path.pop();
        }
        return false;
    }
    
    if(!search(n - 1, target)) return null;

    return path.reverse();
}