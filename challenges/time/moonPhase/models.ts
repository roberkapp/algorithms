export enum MOON_PHASES {
  NEW = 'New',
  WAXING = 'Waxing',
  FULL = 'Full',
  WANING = 'Waning',
}

export type Phase = [number, number, MOON_PHASES];
