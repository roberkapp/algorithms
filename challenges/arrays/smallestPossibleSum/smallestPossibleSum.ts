import { getMCD } from "./utils";

export function smallestPossibleSum(numbers : number[]) : number{
    const minimumCommonDivisible = numbers.reduce((acc, curr) => getMCD(acc, curr), 0);
    return minimumCommonDivisible * numbers.length;
}