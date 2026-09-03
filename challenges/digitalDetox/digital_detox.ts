import { checkPassFourHourPeriod, checkWasLoggedTwiceInADay } from './utils';

export function digitalDetox(logs: string[]): boolean {
  logs = logs.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  return checkPassFourHourPeriod(logs) && checkWasLoggedTwiceInADay(logs);
}
