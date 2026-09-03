const orientationChecker = (qrCode: string[]): boolean => {
  const topRowValidations =
    qrCode.at(0)?.startsWith('11') && qrCode.at(0)?.endsWith('11');
  const bottomRowValidation = qrCode.at(-1)?.startsWith('11');

  return (topRowValidations && bottomRowValidation) || false;
};

const findCorrectOrientation = (qrCode: string[]): string[] => {
  const rotation = [];
  if (orientationChecker(qrCode)) return qrCode;

  const rows = qrCode.length;
  const cols = qrCode[0].length;

  for (let col = 0; col < cols; col++) {
    let newRow = '';
    for (let row = rows - 1; row >= 0; row--) {
      newRow += qrCode[row][col];
    }
    rotation.push(newRow);
  }
  return findCorrectOrientation(rotation);
};

const markersCleaner = (qrCode: string[]): string => {
  const cleanedCode = qrCode.map((row, index, arr) => {
    if (index === 0 || index === 1) {
      return row.substring(2, arr.length - 2);
    } else if (index === arr.length - 1 || index === arr.length - 2) {
      return row.substring(2);
    }
    return row;
  });

  return cleanedCode.join('');
};

export function decodeQr(qrCode: string[]): string {
  const orientedCode = findCorrectOrientation(qrCode);
  const cleanedCode = markersCleaner(orientedCode);
  return cleanedCode;
}
