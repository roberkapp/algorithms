export function stripTags(html: string): string {
  let cleanStr = '',
    openTag = false;

  for (let i = 0; i < html.length; i++) {
    const char = html[i];
    if (char === '<') openTag = true;
    if (char === '>') {
      openTag = false;
      continue;
    }
    if (openTag) continue;
    cleanStr += char;
  }
  return cleanStr;
}
