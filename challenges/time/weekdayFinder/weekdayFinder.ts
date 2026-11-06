import { weekDay } from './const';
import type { Day, Weekday } from './models';

export function getWeekday(dateString: string): Weekday[Day] {
  const dayOfTheWeek = new Date(dateString).getUTCDay();
  return weekDay[dayOfTheWeek as Day];
}
