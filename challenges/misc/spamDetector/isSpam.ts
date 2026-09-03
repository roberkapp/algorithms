export function isSpam(number: string): boolean {
  const [country, area, localNumber] = number.split(' ');
  const [countryCode, areaCode, [localFirstPart, localSecondPart]] = [
    country.replace('+', ''),
    Number(area.replace(/[()]/g, '')),
    localNumber.split('-'),
  ];

  const invalidCountryCode = countryCode.length > 2 || !countryCode.startsWith('0');
  if (invalidCountryCode) return true;

  const invalidAreaCode = areaCode > 900 || areaCode < 200;
  if (invalidAreaCode) return true;

  const sumFirstPart = [...localFirstPart].reduce((acc, curr) => (acc += Number(curr)), 0);
  const invalidFirstPart = localSecondPart.includes(sumFirstPart.toString());
  if (invalidFirstPart) return true;

  const fullNumber = countryCode + areaCode + localFirstPart + localSecondPart;
  for (let i = 0; i < fullNumber.length - 3; i++) {
    const curr = fullNumber[i];
    const next = fullNumber[i + 1];
    const secondNext = fullNumber[i + 2];
    const thirdNext = fullNumber[i + 3];
    if (curr === next && next === secondNext && secondNext === thirdNext) {
      return true;
    }
  }
  return false;
}
