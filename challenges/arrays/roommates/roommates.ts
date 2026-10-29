import type { Person } from './models';

// @CodeScene(disable:"Bumpy Road Ahead")
export function getRoommates(people: Person[]): string[] {
  const rooms: Map<string, string[]> = new Map();
  // Grouping people for room.
  for (const person of people) {
    const { name, group } = person;

    if (!rooms.has(group)) rooms.set(group, [name]);
    else rooms.get(group)?.push(name);
  }

  const sortedRoommates = [];
  // For every room we form couples of roommates
  for (const roommate of rooms.values()) {
    for (let i = 0; i < roommate.length; i += 2) {
      sortedRoommates.push(roommate.slice(i, i + 2).join(' and '));
    }
  }
  return sortedRoommates;
}
