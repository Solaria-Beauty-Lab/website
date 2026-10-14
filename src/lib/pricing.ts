export const euroAmount = (displayPrice: string) => {
  const normalized = displayPrice
    .replace(/[\s€]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");

  if (!/^\d+(?:\.\d{1,2})?$/.test(normalized)) {
    throw new Error(`Invalid EUR price: ${displayPrice}`);
  }

  return Number(normalized).toFixed(2);
};
