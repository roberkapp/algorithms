import { MOON_PHASES, type Phase } from './models';

export function moonPhase(dateString: string): MOON_PHASES {
  const phases: Phase[] = [
    [1, 7, MOON_PHASES.NEW],
    [8, 14, MOON_PHASES.WAXING],
    [15, 21, MOON_PHASES.FULL],
    [22, 28, MOON_PHASES.WANING],
  ];

  const reference = new Date('2000-01-06');
  const current = new Date(dateString);
  // Calculo la diferencia entre el dia base y el que me pasaron esto es en ms
  const diffInMs = Number(current) - Number(reference);
  // Hago el pasaje en dias para saber cuantos dias pasaron.
  const days = diffInMs / (1000 * 60 * 60 * 24);
  //Ahora calculo en que dia del ciclo esta: Como es un ciclo de 28 días:
  const cycle = (days % 28) + 1; // + 1 porque arranca en día 1 no en 0.

  const phase = phases.find(([start, end]) => cycle >= start && cycle <= end);
  if (!phase) return MOON_PHASES.NEW;
  return phase[2];
}
