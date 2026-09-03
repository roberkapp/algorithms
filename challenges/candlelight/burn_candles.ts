export function burnCandles(candles: number, leftoversNeeded: number): number {
  const countBurned = (candles: number, leftovers: number): number => {
    const burned = candles;
    // todo lo quemado es resto para reciclar
    const totalLeftovers = candles + leftovers;
    // reciclo usando lo que queme mas lo que sobro anteriormente
    const newCandles = Math.floor(totalLeftovers / leftoversNeeded);
    // vuelvo a tomar el sobrante para el proximo ciclo
    const remaining = Math.floor(totalLeftovers % leftoversNeeded);

    //si no hay para hacer nuevas velas salgo
    if (newCandles === 0) return burned;
    // si hay para hacer mas retorno lo que se quemo en este ciclo + lo proximo a quemar
    return burned + countBurned(newCandles, remaining);
  };

  return countBurned(candles, 0);
}
