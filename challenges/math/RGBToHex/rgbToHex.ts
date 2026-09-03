export function rgbToHex(rgb: string): string {
  const code = rgb.replace(/[rgb()\s]/g, '').split(',');
  //We pass the code rgb to hexadecimal and complete the 2 digits with 0
  return `#${code.map((c) => (+c).toString(16).padStart(2, '0')).join('')}`;
}
