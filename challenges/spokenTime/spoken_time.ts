import { UNITS } from './models';
import { getTimeByAngle, responseGenerator } from './utils';

export function getSpokenTime(hourAngle: number, minuteAngle: number): string {
  const hour = getTimeByAngle(hourAngle, UNITS.HOURS);
  const minutes = getTimeByAngle(minuteAngle, UNITS.MINUTES);

  return responseGenerator(hour, minutes);
}
