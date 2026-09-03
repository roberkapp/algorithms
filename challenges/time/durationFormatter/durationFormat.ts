import { parser } from './utils';

export function durationFormat(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  // tomo los segundos que restan luego de agarrar las horas
  seconds %= 3600;

  const minutes = Math.floor(seconds / 60);
  //lo mismo tomo los segundos que sobraron de los minutos
  seconds %= 60;

  const mm = hours ? parser(minutes) : minutes;
  const ss = parser(seconds);

  return hours ? `${hours}:${mm}:${ss}` : `${mm}:${ss}`;
}
