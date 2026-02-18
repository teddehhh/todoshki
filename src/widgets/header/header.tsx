import { useContext } from "react";
import { ThemeContext } from "../../shared/lib/context/theme-context";
import { APPEARANCES, FONTS } from "../../shared/types/theme";
import styles from "./header.module.css";

export function Header() {
  const theme = useContext(ThemeContext);

  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div>ТУДУШКИ</div>
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              theme?.setTheme({
                appearance: e.target.checked
                  ? APPEARANCES.dark
                  : APPEARANCES.light,
                font: FONTS.monospace,
              });
            }}
          />
        </div>
      </div>
      <div>
        <div>Дмитрий</div>
      </div>
    </header>
  );
}
