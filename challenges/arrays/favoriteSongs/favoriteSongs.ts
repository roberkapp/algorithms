import type { Song } from './models';

export function favoriteSongs(playlist: Song[]): string[] {
  return playlist
    .sort((a, b) => b.plays - a.plays)
    .map((song) => song.title)
    .slice(0, 2);
}
