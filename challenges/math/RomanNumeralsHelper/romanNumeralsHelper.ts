export class RomanNumeralsHelper {
  static #equivalences: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  static toRoman(num: number): string {
    let response = '';

    for (const key in this.#equivalences) {
      const value = this.#equivalences[key];

      while (num >= value) {
        response += key;
        num -= value;
      }
    }
    return response;
  }

  static fromRoman(str: string): number {
    let response = 0;

    for (let i = 0; i < str.length; i++) {
      const curr = this.#equivalences[str[i]];
      const next = this.#equivalences[str[i + 1]];

      response += curr < next ? -curr : curr;
    }
    return response;
  }
}
