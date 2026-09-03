export const checkPassFourHourPeriod = (logs: string[]): boolean => {
  return logs.every((log, i) => {
    if (i < logs.length - 1) {
      let limit = new Date(log);
      limit.setUTCHours(limit.getUTCHours() + 4);
      return limit < new Date(logs[i + 1]);
    }
    return true;
  });
};

export const checkWasLoggedTwiceInADay = (logs: string[]): boolean => {
  const map: Record<string, number> = {};

  logs.forEach((log) => {
    const name = log.slice(0, 10);
    map[name] = map[name] + 1 || 1;
  });

  return Object.values(map).every((val) => val < 3);
};
