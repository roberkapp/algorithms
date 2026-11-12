export function trilingualDemocracy(group: string): string {
  const peopleByLanguage: Map<string, number> = new Map();

  for (const person of group) {
    peopleByLanguage.set(person, (peopleByLanguage.get(person) ?? 0) + 1);
  }

  const counts = peopleByLanguage.size;

  if (counts === 1) return group[0];
  if (counts === 2) return [...peopleByLanguage].find(([_, val]) => val === 1)?.[0]!;
  return 'DFIK'.split('').find((lang) => !peopleByLanguage.has(lang))!;
}
