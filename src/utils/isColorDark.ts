export const isColorDark = (hex: string) => {
  const sanitized = hex.replace("#", "");
  const bigint = parseInt(sanitized, 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

  return brightness < 128;
};
