export function creditCardMasker(card: string): string {
  return card.slice(0, -4).replace(/\d/g, '*') + card.slice(-4);
}
