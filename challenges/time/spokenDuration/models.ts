export enum TIME_UNITS {
  HOUR = 'hour',
  MINUTE = 'minute',
  SECOND = 'second',
}

export interface Time {
  timer: number;
  unit: TIME_UNITS;
}

export const hourInMs = 3600;
export const minutesInMs = 60;
