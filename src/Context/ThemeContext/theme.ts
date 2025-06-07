export const THEMES = {
  AUTO: "auto",
  LIGHT: "light",
  DARK: "dark",
} as const;

export type Theme = typeof THEMES[keyof typeof THEMES];

export const DEFAULT_THEME: Theme = THEMES.AUTO;
