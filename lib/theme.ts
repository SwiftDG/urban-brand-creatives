export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  silverBlack: "#121214",
  purpleDeep: "#3B1F5E",
  purpleMid: "#6B3FA0",
  purpleDark: "#2A1245",
  purpleWash: "#EDE6F7",
  orangeRed: "#E8390E",
  orangeRedDark: "#C82D08",
  offWhite: "#F7F7F9",
  silver: "#A0A0A8",
  silverLight: "#D4D4DC",
} as const;

export const fonts = {
  display: "var(--font-dm-serif-display)",
  body: "var(--font-inter)",
  accent: "var(--font-cormorant-garamond)",
} as const;

export const layout = {
  maxWidth: "1280px",
  columns: 12,
  sidePaddingDesktop: "80px",
  sectionGap: "120px",
} as const;

export const radius = {
  none: "0px",
  button: "4px",
  card: "8px",
} as const;

export type ColorToken = keyof typeof colors;
