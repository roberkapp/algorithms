export const getMCD = (num1: number, num2: number) : number => {
    while(num2 !== 0){
        [num1, num2] = [num2, num1 % num2]
    }
    return num1;
}