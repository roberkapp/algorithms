import { TIME_UNITS, Time, hourInMs, minutesInMs } from './models';

export function getSpokenDuration(seconds: number): string {
  const hours = Math.floor(seconds / hourInMs);
  seconds %= hourInMs;
  const minutes = Math.floor(seconds / minutesInMs);
  seconds %= minutesInMs;

  const time: Time[] = [];
  if (hours) time.push({ timer: hours, unit: TIME_UNITS.HOUR });
  if (minutes) time.push({ timer: minutes, unit: TIME_UNITS.MINUTE });
  if (seconds) time.push({ timer: seconds, unit: TIME_UNITS.SECOND });

  const parts = time.map(
    ({ timer, unit }) => `${timer} ${unit}${timer > 1 ? 's' : ''}`
  );

  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return parts.join(' and ');
  return parts.slice(0, -1).join(', ') + ' and ' + parts.at(-1);
}
