export function launchFuel(payload: number): string {
  const kgsPerLtOfFuel = 5;
  const weightLimit = 1;

  const getFuelNeeded = (originalPayload: number, totalPayload: number, currentFuel: number) => {
    const fuelNeeded = totalPayload / kgsPerLtOfFuel;
    const totalMass = fuelNeeded + originalPayload;

    if (fuelNeeded - currentFuel <= weightLimit) return fuelNeeded;
    return getFuelNeeded(originalPayload, totalMass, fuelNeeded);
  };

  return getFuelNeeded(payload, payload, 0).toFixed(1);
}
