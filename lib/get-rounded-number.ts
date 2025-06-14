export const getRoundedNumber = (n: number): string => {
  if (n < 1000) {
    return Math.round(n).toString();
  }

  const thousands = n / 1000;
  if (thousands < 10) {
    return `${thousands.toFixed(1)}k`;
  }

  return `${Math.round(thousands)}k`;
};
