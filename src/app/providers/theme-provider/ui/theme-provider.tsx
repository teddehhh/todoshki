import { useState, type PropsWithChildren } from "react";
import { ThemeContext } from "../../../../shared/lib/context/theme-context";
import { APPEARANCES, type Theme } from "../../../../shared/types/theme";
import { DEFAULT_THEME } from "../lib/constants/default-theme";

export function ThemeProvider(props: PropsWithChildren) {
  const { children } = props;
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
  const { appearance, font } = theme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          background:
            appearance === APPEARANCES.dark ? "midnightblue" : "white",
          fontFamily: font,
          height: "100vh",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
