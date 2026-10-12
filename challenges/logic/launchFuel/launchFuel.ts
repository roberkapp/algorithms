export function launchFuel(payload: number): string {
  const payloadInKgPerFuelKg = 5;

  function fuelNeeded(currentPayload: number): string {
    // We calculate the fuel needed to lift the current payload;
    const currentFuel = currentPayload / payloadInKgPerFuelKg;
    // We add that fuel to the base payload;
    const totalMass = currentFuel + payload;
    // If the difference between the base payload plus the amount of fuel minus the last iteration of total mass
    // is less than 1, we return the currentFuel with decimals fixed to 1.
    if (totalMass - currentPayload < 1) return currentFuel.toFixed(1);
    return fuelNeeded(totalMass);
  }

  return fuelNeeded(payload);
}
