import { units } from './constants';
import { UNITS } from './models';

export const getTimeByAngle = (angle: number, unit: UNITS) =>
  Math.floor((angle * units[unit]) / 360);

export const responseGenerator = (hour: number, minutes: number): string => {
  const responses: Record<number, string> = {
    0: `${hour} o'clock`,
    15: `quarter past ${hour}`,
    30: `half past ${hour}`,
    45: `quarter to ${hour + 1}`,
  };

  let response = responses[minutes];

  if (!response) {
    if (minutes >= 1 && minutes <= 29)
      response = `${minutes} minutes past ${hour}`;
    else `${units[UNITS.MINUTES] - minutes} minutes to ${hour + 1}`;
  }
  return response;
};
