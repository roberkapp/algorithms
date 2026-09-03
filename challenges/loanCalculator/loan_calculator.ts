export function getLoanSchedule(
  loanAmount: number,
  annualRate: number,
  monthlyPayment: number
): number[] {
  const remainingBalances = [loanAmount];
  const interestRate = annualRate / 100 / 12;

  while (loanAmount > 0) {
    const interest = interestRate * loanAmount;
    const payment = monthlyPayment - interest;
    loanAmount -= payment;
    remainingBalances.push(Math.max(0, Math.round(loanAmount)));
  }

  return remainingBalances;
}
