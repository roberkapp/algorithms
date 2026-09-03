export function countBussinessDays(start: string, end: string): number {
  const weekDays = new Set([1, 2, 3, 4, 5]);

  let startDate = new Date(start);
  const endDate = new Date(end);

  let counter = 0;
  while (startDate <= endDate) {
    const weekDay = startDate.getUTCDay();
    if (weekDays.has(weekDay)) counter++;
    startDate.setDate(startDate.getDate() + 1);
  }

  return counter;
}
