import { useContext } from "react";
import { ThemeContext } from "../../shared/lib/context/theme-context";
import { APPEARANCES, FONTS } from "../../shared/types/theme";

export function Header() {
  const theme = useContext(ThemeContext);

  return (
    <header>
      Темная тема
      <input
        type="checkbox"
        onChange={(e) => {
          theme?.setTheme({
            appearance: e.target.checked ? APPEARANCES.dark : APPEARANCES.light,
            font: FONTS.monospace,
          });
        }}
      />
    </header>
  );
}
