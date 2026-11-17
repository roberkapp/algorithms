import { isLessThanLimit, hasUpperCase } from "./utils";

export function fingerprintTest(fingerprintA: string, fingerprintB: string) : boolean {
    if(hasUpperCase(fingerprintA) || hasUpperCase(fingerprintB)) return false;
    if(fingerprintA.length !== fingerprintB.length) return false;

    const tenPercent = fingerprintA.length * 0.10;
    return isLessThanLimit(fingerprintA, fingerprintB, tenPercent);
}