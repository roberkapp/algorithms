export const sorter = (n: number, order: 'asc' | 'desc'): string =>
  [...n.toString()]
    .sort((a, b) => (order === 'asc' ? Number(a) - Number(b) : Number(b) - Number(a)))
    .join('')
    .padStart(4, '0');
