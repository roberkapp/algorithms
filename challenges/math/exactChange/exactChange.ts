export function exactChange(amount: number): number {
  const coinValues = [25, 10, 5, 1];

  const changePosibilities = (
    remainingAmount: number,
    coinIndex: number
  ): number => {
    // me pase.
    if (remainingAmount < 0 || coinIndex === coinValues.length) return 0;
    // encontre un cambio exacto
    if (remainingAmount === 0) return 1;

    const coinValue = coinValues[coinIndex];
    if (coinValue > remainingAmount) {
      // si la moneda es demasiado grande, pruebo de nuevo con una mas chica
      return changePosibilities(remainingAmount, coinIndex + 1);
    } else {
      // si la monedad me sirve pruebo usando la moneda y con la siguiente si existe
      // ejemplo moneda de 5 y moneda de 1.
      const diff = remainingAmount - coinValue;
      return (
        changePosibilities(diff, coinIndex) +
        changePosibilities(remainingAmount, coinIndex + 1)
      );
    }
  };

  return changePosibilities(amount, 0);
}
