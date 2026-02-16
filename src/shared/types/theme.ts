export const APPEARANCES = {
  light: "light",
  dark: "dark",
} as const;
export const FONTS = {
  monospace: "monospace",
  sansSerif: "sans-serif",
} as const;

type Appearance = (typeof APPEARANCES)[keyof typeof APPEARANCES];
type Fonts = (typeof FONTS)[keyof typeof FONTS];

export interface Theme {
  appearance: Appearance;
  font: Fonts;
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (_: Theme) => void;
}
