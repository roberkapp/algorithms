export function triageIssue(ms: number, message: string) {
  const days = ms / 86400000; //ms in a day.
  if (days < 7) return 'leave it';
  if (days >= 7 && message.toLowerCase().includes('bump')) return 'close it';
  return 'bump it';
}
