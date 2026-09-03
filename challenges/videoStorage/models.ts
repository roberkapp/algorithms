export enum VIDEO_UNITS {
  B = 'B',
  KB = 'KB',
  MB = 'MB',
  GB = 'GB',
}

export enum DRIVE_UNITS {
  GB = 'GB',
  TB = 'TB',
}

export type Response = number | 'Invalid video unit' | 'Invalid drive unit';
