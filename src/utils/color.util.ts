export const hexToRgba = (hex: string, alpha: number) => {
  hex = hex.replace(/^#/, "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

export const generateColors = (count: number): string[] => {
  if (count <= 0) return [];

  const colors: string[] = [];

  for (let i = 0; i < count; i++) {
    const hue = Math.floor(Math.random() * 360); // Random hue
    const lightness = 30 + Math.random() * 20; // Avoid very light colors (range: 30% - 50%)
    colors.push(hslToHex(hue, 100, lightness));
  }

  return colors;
};

export const lightenColor = (hex: string, percent: number = 80): string => {
  if (!hex) return "";
  // Ensure hex is valid
  hex = hex?.replace(/^#/, "");
  if (hex?.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  if (hex?.length !== 6) {
    throw new Error("Invalid HEX color.");
  }

  // Convert hex to RGB
  let [r, g, b] = [0, 2, 4].map((index) =>
    parseInt(hex.substring(index, index + 2), 16)
  );

  // Lighten color
  r = Math.min(255, Math.round(r + (255 - r) * (percent / 100)));
  g = Math.min(255, Math.round(g + (255 - g) * (percent / 100)));
  b = Math.min(255, Math.round(b + (255 - b) * (percent / 100)));

  // Convert back to hex
  return `#${[r, g, b]
    .map((val) => val.toString(16).padStart(2, "0"))
    .join("")}`;
};
