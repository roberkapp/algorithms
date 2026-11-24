import { gcm } from "./utils";

export function lcm(a: number,b: number) : number{
    return (a * b) / gcm(a,b);
}