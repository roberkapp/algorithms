import type { Tier } from './models';

const tiers: Record<number, Tier> = {
  1: { base: 4.99, late: 3.99 },
  3: { base: 3.99, late: 2.99 },
  7: { base: 2.99, late: 0.99 },
};

function getTotalFee(due: Date, returned: Date, lateFee: number): number {
  let counter = 0;

  while (due < returned) {
    counter++;
    due.setUTCDate(due.getUTCDate() + 1);
  }

  return counter * lateFee;
}

export function getRentalCost(rented: string, returned: string, tier: number): string {
  const _returned = new Date(returned);

  // el vencimiento lo voy a calcular a partir de cuando lo rento + el tier
  const due = new Date(rented);
  due.setUTCDate(due.getUTCDate() + tier);
  due.setUTCHours(12, 0, 0, 0);

  const { base, late } = tiers[tier];

  if (_returned <= due) return `$${base.toFixed(2)}`;
  const totalFee = getTotalFee(due, _returned, late);
  return `$${(base + totalFee).toFixed(2)}`;
}
