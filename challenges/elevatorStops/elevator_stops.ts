function calculateDistance(arr: number[], start: number): number {
  let floorDistance = 0;
  let current = start;

  for (let i = 0; i < arr.length; i++) {
    const travelingFloor = arr[i];
    floorDistance += Math.abs(travelingFloor - current);
    current = travelingFloor;
  }
  return floorDistance;
}

function helper(currentFloor: number, stops: number[]): number[] {
  const start = stops.indexOf(currentFloor);
  const higherFloors = stops.slice(start + 1);
  const lowerFloors = stops.slice(0, start).reverse();

  const upToDown = [...higherFloors, ...lowerFloors];
  const downToUp = [...lowerFloors, ...higherFloors];

  const distanceDown = calculateDistance(downToUp, currentFloor);
  const distanceUp = calculateDistance(upToDown, currentFloor);

  if (distanceDown < distanceUp) return downToUp;
  return upToDown;
}

export function elevatorStops(currentFloor: number, stops: number[]): number[] {
  const sorted = [...stops, currentFloor].sort((a, b) => a - b);
  return helper(currentFloor, sorted);
}
