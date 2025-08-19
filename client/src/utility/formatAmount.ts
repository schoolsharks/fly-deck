export function formatAmount(amount: number | string): string {
  const num = Number(amount);
  if (isNaN(num)) return "0";

  return num.toLocaleString("en-IN");
}