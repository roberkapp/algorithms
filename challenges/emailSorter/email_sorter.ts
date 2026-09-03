export function emailSorter(emails: string[]): string[] {
  return emails.sort((a, b) => {
    const [usernameA, domainA] = a.split('@');
    const [usernameB, domainB] = b.split('@');

    const normalizedDomainA = domainA.toLowerCase();
    const normalizedDomainB = domainB.toLowerCase();

    if (normalizedDomainA !== normalizedDomainB) {
      return normalizedDomainA.localeCompare(normalizedDomainB);
    } else {
      return usernameA.toLowerCase().localeCompare(usernameB.toLowerCase());
    }
  });
}
